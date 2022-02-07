export const getParagraphProps = (data, large = false) => ({
  text: data.fields.paragraph,
  setting: {
    large,
  },
});