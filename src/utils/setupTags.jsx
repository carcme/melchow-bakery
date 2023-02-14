const setupTags = (cakes) => {
  const allTags = {};

  cakes.forEach((cake) => {
    cake.content.tags.forEach((tag) => {
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1;
      } else {
        allTags[tag] = 1;
      }
    });
  });

  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a;
    const [secondTag] = b;
    return firstTag.localeCompare(secondTag); // sort on alphabet
  });
  return newTags;
};

export default setupTags;
