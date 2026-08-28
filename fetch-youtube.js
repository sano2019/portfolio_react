import fs from "fs";
import path from "path";

const FEED_URL =
  "https://www.youtube.com/feeds/videos.xml?channel_id=UCcAmd8YHfnF9sHcW70aP6ig";
const OUTPUT_DIR = path.resolve("public");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "youtube-videos.json");

async function fetchYouTubeFeed() {
  try {
    console.log("Fetching YouTube RSS feed...");
    const response = await fetch(FEED_URL);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const xmlText = await response.text();

    // Extract individual video entries
    const entryMatches = xmlText.match(/<entry>([\s\S]*?)<\/entry>/g) || [];

    const videos = entryMatches
      .map((entry) => {
        const titleMatch = entry.match(/<title>([\s\S]*?)<\/title>/);
        const linkMatch = entry.match(/<link[^>]*href=["']([^"']*)["']/);
        const idMatch = entry.match(/<yt:videoId>([\s\S]*?)<\/yt:videoId>/);
        const updatedMatch = entry.match(/<updated>([\s\S]*?)<\/updated>/);

        return {
          id: idMatch ? idMatch[1] : "",
          title: titleMatch ? titleMatch[1] : "",
          link: linkMatch ? linkMatch[1] : "",
          date: updatedMatch ? updatedMatch[1] : "",
        };
      })
      .filter((video) => video.id);

    // ⚡ OPTIMIZATION: Slice the array down to exactly the 2 most recent uploads
    const limitedVideos = videos.slice(0, 2);

    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(limitedVideos, null, 2));
    console.log(
      `Successfully saved ${limitedVideos.length} videos to ${OUTPUT_FILE}`,
    );
  } catch (error) {
    console.error("Error fetching YouTube feed:", error);
    process.exit(1);
  }
}

fetchYouTubeFeed();
