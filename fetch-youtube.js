import fs from "fs";
import path from "path";
import { XMLParser } from "fast-xml-parser";

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
    const parser = new XMLParser({ ignoreAttributes: false });
    const result = parser.parse(xmlText);

    const entries = result.feed?.entry || [];
    const videos = entries
      .map((entry) => {
        const media = entry["media:group"] || {};
        return {
          id: entry["yt:videoId"] || "",
          title: entry.title || "",
          link: entry.link?.["@_href"] || entry.link || "",
          date: entry.updated || entry.published || "",
        };
      })
      .filter((v) => v.id);

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
