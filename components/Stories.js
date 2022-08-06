import StoryCard from "./StoryCard"

const stories= [
    {
        name: "Sonny Manga",
        src:"https://links.papareact.com/l4v",
        profile:"https://links.papareact.com/l4v",
    },
    {
        name: "Elon Manga",
        src:"https://links.papareact.com/4zn",
        profile:"https://links.papareact.com/kxk",
    },
    {
        name: "Jeff Manga",
        src:"https://links.papareact.com/k2j",
        profile:"https://links.papareact.com/f0p",
    },
    {
        name: "Mark Manga",
        src:"https://links.papareact.com/xql",
        profile:"https://links.papareact.com/snf",
    },
    {
        name: "Bill Manga",
        src:"https://links.papareact.com/4u4",
        profile:"https://links.papareact.com/zvy",
    },
]

const Stories = () => {
  return (
    <div className="flex justfify-center space-x-3 mx-auto ">
        {stories.map(story=>(
            <StoryCard name={story.name} src={story.src} profile={story.profile} key={story.name}></StoryCard>
        ))}
    </div>
  )
}

export default Stories