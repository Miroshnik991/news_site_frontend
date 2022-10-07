export default function PostsFilter(textInput, tab, posts) {
  const filterpostsByTabs = {
    all: (item) => [
      item.title,
      item.content,
      item.tags,
      item.user.name,
    ],
    authors: (item) => [
      item.user.name,
    ],
    tags: (item) => item.tags.map((tagItem) => tagItem.tag_name),
  };
  if (!Object.keys(filterpostsByTabs).includes(tab)) {
    return [];
  }
  const filterFields = filterpostsByTabs[tab];
  const inputLC = textInput.toLowerCase();
  const result = posts.filter((postsItem) => (
    filterFields(postsItem)
      .map((item) => String(item).toLowerCase())
      .some((filterMapValueLC) => filterMapValueLC.replaceAll('ё', 'е').includes(inputLC))
  ));
  return result;
}
