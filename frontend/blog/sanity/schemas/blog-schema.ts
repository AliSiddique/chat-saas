const Blog = {
  name: "blog",
  title: "Blogs",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" }
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string"
        }
      ]
    },
    {
      name:"Category",
      title:"Category",
      type:"string",
      options:{
        list:[
          {title:"Neuroscience",value:"neuroscience"},
          {title:"Psychology",value:"psychology"},
          {title:"Philosophy",value:"philosophy"},
          {title:"Artificial Intelligence",value:"artificial-intelligence"},
          {title:"Machine Learning",value:"machine-learning"},
        ]
      }
    },
    {
      name: "url",
      title: "URL",
      type: "url"
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }]
    }
  ]
}

export default Blog;