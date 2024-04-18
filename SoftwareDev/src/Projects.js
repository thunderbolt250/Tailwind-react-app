
import joe from './images/joe.jpg'
import kg2 from './images/kg2.png'
import kevine from './images/kevine.jpeg'
import nadia from './images/nadia.jpeg'
import tbolt from './images/tbolt.jpeg'
import Ngabo from './images/ngabo.jpg'

const posts = [
  {
    id: 1,
    title: 'Situation system',
    href: '#',
    description:
      'He is currently assigned to incident, crime and road accidents management system.',
    date: 'Mar 2024',
    datetime: '2024-03-16',
    category: { title: 'Engineer', href: '#' },
    author: {
      name: 'Kamana Gervais',
      role: 'Co-Founder / CEO and Frontend Developer',
      href: '#',
      imageUrl: kg2,
    },
  },
  {
    id: 2,
    title: 'Tekana system',
    href: '#',
    description:
      'He is currently assigned to tekana systems and outlook.',
    date: 'Mar 2024',
    datetime: '2024-03-16',
    category: { title: 'Engineer', href: '#' },
    author: {
      name: 'Ngabo Prince',
      role: 'Backend Developer',
      href: '#',
      imageUrl: Ngabo,
    },
  },
  {
    id: 3,
    title: 'Situation systems',
    href: '#',
    description:
      'He is currently assigned to incident, crime and road accidents management system and webex support.',
    date: 'Mar 2024',
    datetime: '2024-03-16',
    category: { title: 'Engineer', href: '#' },
    author: {
      name: 'Mwesigye Emmy',
      role: 'Frontend Developer',
      href: '#',
      imageUrl: tbolt
        },
  },
  {
    id: 4,
    title: 'Smart admin system',
    href: '#',
    description:
      'She is currently assigned to smart admin.',
    date: 'Mar 2024',
    datetime: '2024-03-16',
    category: { title: 'Engineer', href: '#' },
    author: {
      name: 'Umuhoza Nadia',
      role: 'Software testing',
      href: '#',
      imageUrl: nadia
        },
  },
  {
    id: 5,
    title: 'Situation systems',
    href: '#',
    description:
      'She is currently assigned to incident, crime and road accidents management system and webex support.',
    date: 'Mar 2024',
    datetime: '2024-03-16',
    category: { title: 'Engineer', href: '#' },
    author: {
      name: 'Mfuranzima Kevine',
      role: 'Software Designing',
      href: '#',
      imageUrl: kevine
    },
  },
  {
    id: 6,
    title: 'Logistics management systems',
    href: '#',
    description:
      'He is currently assigned to logistics management system formerly invictus system.',
    date: 'Mar 2024',
    datetime: '2024-03-16',
    category: { title: 'Engineer', href: '#' },
    author: {
      name: 'Hagenimana Joe',
      role: 'Frontend and Backend Developer',
      href: '#',
      imageUrl: joe
       },
  },
  // More posts...
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Software Development Projects</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Our software engineers and the projects they currently working on.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}



        </div>
      </div>
    </div>
  )
}
