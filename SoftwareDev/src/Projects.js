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
      imageUrl:
        'https://scontent.fkgl1-1.fna.fbcdn.net/v/t1.6435-9/94779001_2425222327727332_269324093323476992_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCujC2k7SEBE5DDoLn-H1GVtJauXyOl4RW0lq5fI6XhM-klkfr_0CshhDM7nJD-r1yC7dxNEaBcl6VhihAtV7Y&_nc_ohc=K-6QrqGxA8QAX_k-xHO&_nc_ht=scontent.fkgl1-1.fna&oh=00_AfD87lMLJqnML13JnJvlOTyU6hukyu0JvzLKO5cPShQzpg&oe=661137E3',
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
      imageUrl:
        'https://scontent.fkgl1-1.fna.fbcdn.net/v/t39.30808-6/295311824_378074524466207_1935534788797974280_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGd_VK1iA8pq07G-1V1T2cQqdbV-u7yKbap1tX67vIptn_ctZcoNr8wPJ8o0XaLKWiuYYxv2i1YNVOmVRqIhZQK&_nc_ohc=47RYIee6GXoAX9aGHe6&_nc_ht=scontent.fkgl1-1.fna&oh=00_AfDGykdDvu9KUVjX5TpY2RquARbYGB-6LqfTr4NqSU2FmA&oe=65FFFB96',
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
      imageUrl:
        'https://scontent.fkgl1-1.fna.fbcdn.net/v/t1.6435-1/54514799_2191381477791874_2831588517103009792_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHRJPKyYktGO6rzASwjJzic9fGkbcfdzJb18aRtx93MlhaZBHy5dxPL9LBL7m1hiPoIuY-XRwpSn_VoOaDC1cN6&_nc_ohc=VsHBrPH0oyEAX8uwsRl&_nc_ht=scontent.fkgl1-1.fna&oh=00_AfAfkzs0dlV00u1dk760dNIB_BDOkxEqPCQC0Pzaxiw4_w&oe=6611517B',
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
      imageUrl:
        'https://scontent.fkgl1-1.fna.fbcdn.net/v/t1.6435-9/40551418_2230150627227748_2808149407394955264_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEb2x35V1vyIZJEb91BZ2Uq7wN4op84LpDvA3iinzgukOweuETr9QfS-1toHiwa_aQONE_-kR-MHs5qkvLjzlvd&_nc_ohc=VzXIb_xZlDUAX8FAlWA&_nc_ht=scontent.fkgl1-1.fna&oh=00_AfBvXmWF685VwDVB4NEIyDAMBzJ4_nwMPW4rjzCByGIrEQ&oe=66115079',
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
      imageUrl:
        'https://scontent.fkgl1-1.fna.fbcdn.net/v/t1.6435-9/38916091_2181772762104607_4837135805346480128_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGhVa0msITesU0kpRObTQHZ6hRYSc8GU_fqFFhJzwZT9_2imvBUNwaAJdQchtW4d-AvrnQDc-qKFacsEPGvCFuP&_nc_ohc=LeuHxGQ7uTgAX-NDLoT&_nc_ht=scontent.fkgl1-1.fna&oh=00_AfBDlF5GICLxIEOqCBHB19-5VLhTHP2CZiwkxIoaN2iWtA&oe=661141AF',
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
      imageUrl:
        'https://scontent.fkgl1-1.fna.fbcdn.net/v/t1.6435-9/142146787_2879198125658614_5362150710418629982_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF7aSzfDyisQ-8wkksHI_1kR9W_E5dJeAxH1b8Tl0l4DPB0BtDb-1adBE_a_ayBYAMA6P27-F-iCFIY2bRIl_rq&_nc_ohc=TGoOXezowuUAX8nlBb_&_nc_ht=scontent.fkgl1-1.fna&oh=00_AfC3igCDciN9uBE7GkCg8kOm2OStaMuveiOl03kS8HwBRA&oe=6611402D',
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
