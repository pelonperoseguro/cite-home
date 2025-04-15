import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import Nunjucks from "nunjucks";

export default async function (eleventyConfig) {

  eleventyConfig.setServerOptions({
    // Whether DOM diffing updates are applied where possible instead of page reloads
    domDiff: true,

    // The starting port number
    // Will increment up to (configurable) 10 times if a port is already in use.
    port: 7777,

    // Show local network IP addresses for device testing
    showAllHosts: true,

    // Change the default file encoding for reading/serving files
    encoding: "utf-8",

    // Show the dev server version number on the command line
    showVersion: true,
  });

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  let nunjucksEnvironment = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader("src/_includes")
  );

  eleventyConfig.setLibrary("njk", nunjucksEnvironment);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
};

export const config = {
  dir: {
    input: "src",
    output: "docs"
  }
};