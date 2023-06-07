export const upFunction = () => {
  const { documentElement, body: bodyHTML } = document;

  const body =
    documentElement.scrollTop !== undefined ? documentElement : bodyHTML;
  body.scrollTop = 0;
};
