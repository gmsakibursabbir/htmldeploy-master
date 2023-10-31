const repox = [
  { repoName: "HTML", creators: "Doe" },
  { repoName: "CSS", creators: "Smith" },
  { repoName: "JS", creators: "Johnson" },
];

const modifiedRepo = repox.map((repoz, index) => {
  if (index === 0) {
    return { repoName: "XHTML", creators: "Sony" };
  } else {
    return repoz;
  }
});

console.log(modifiedRepo);
