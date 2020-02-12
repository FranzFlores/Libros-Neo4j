module.exports = {
  idAuthor: {
    type: 'string',
    primary: true
  },
  name: 'string',
  country: 'string',
  writed: {
    type: "relationship",
    target: "book",
    relationship: "WRITED",
    direction: "out",
    properties: {
      year: "number"
    }
  }
}