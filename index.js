
/*
let data1 = [
  {
    title:"post 1",
    body:"it is first post",
  },

  {
    title:"post 2",
    body:"it is second post",
  },

  {
    title:"post 3",
    body:"it is three post",
  },

  {
    title:"post 4",
    body:"it is four post",
  },
];
*/

const fetchData=async(config)=>{
  try {
    const res = await axios(config)
  return res.data;
  } catch (error) {
    throw Error("data is not fetched")
  }
}

let posts = document.querySelector(".posts")

const dynamicPost =async ()=>{
 let data = await fetchData("https://jsonplaceholder.typicode.com/posts")
data.map((data)=>{
    let post = document.createElement("div")
    post.classList.add("post")
    post.innerHTML=`
    <h3>${data.title}</h3>
    <p>${data.body}</p>
    `
    posts.appendChild(post)
  })
  console.log(posts)
}

dynamicPost();




































