import './cssfile.css'

const people = [
    {
      name: 'Kamana Gervas',
      email: 'kamana@rnp.com',
      role: 'Co-Founder / CEO & Frontend Developer',
      imageUrl: 'https://scontent.fkgl1-1.fna.fbcdn.net/v/t1.6435-9/94779001_2425222327727332_269324093323476992_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCujC2k7SEBE5DDoLn-H1GVtJauXyOl4RW0lq5fI6XhM-klkfr_0CshhDM7nJD-r1yC7dxNEaBcl6VhihAtV7Y&_nc_ohc=K-6QrqGxA8QAX_k-xHO&_nc_ht=scontent.fkgl1-1.fna&oh=00_AfD87lMLJqnML13JnJvlOTyU6hukyu0JvzLKO5cPShQzpg&oe=661137E3',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Ngabo Prince',
      email: 'ngaboprince@rnp.com',
      role: 'Backend Developer',
      imageUrl: 'https://scontent.fkgl1-1.fna.fbcdn.net/v/t39.30808-6/295311824_378074524466207_1935534788797974280_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGd_VK1iA8pq07G-1V1T2cQqdbV-u7yKbap1tX67vIptn_ctZcoNr8wPJ8o0XaLKWiuYYxv2i1YNVOmVRqIhZQK&_nc_ohc=47RYIee6GXoAX9aGHe6&_nc_ht=scontent.fkgl1-1.fna&oh=00_AfDGykdDvu9KUVjX5TpY2RquARbYGB-6LqfTr4NqSU2FmA&oe=65FFFB96',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Mfuranzima Kevine',
      email: 'mfuranzimak@rnp.com',
      role: 'Software Designer & Business Relations',
      imageUrl: 'https://scontent.fkgl1-1.fna.fbcdn.net/v/t1.6435-9/38916091_2181772762104607_4837135805346480128_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGhVa0msITesU0kpRObTQHZ6hRYSc8GU_fqFFhJzwZT9_2imvBUNwaAJdQchtW4d-AvrnQDc-qKFacsEPGvCFuP&_nc_ohc=LeuHxGQ7uTgAX-NDLoT&_nc_ht=scontent.fkgl1-1.fna&oh=00_AfBDlF5GICLxIEOqCBHB19-5VLhTHP2CZiwkxIoaN2iWtA&oe=661141AF',
      lastSeen: null,
    },
    {
      name: 'Mwesigye Emmy',
      email: 'mwesigye@rnp.com',
      role: 'Front-end Developer',
      imageUrl: 'https://scontent.fkgl1-1.fna.fbcdn.net/v/t1.6435-1/54514799_2191381477791874_2831588517103009792_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHRJPKyYktGO6rzASwjJzic9fGkbcfdzJb18aRtx93MlhaZBHy5dxPL9LBL7m1hiPoIuY-XRwpSn_VoOaDC1cN6&_nc_ohc=VsHBrPH0oyEAX8uwsRl&_nc_ht=scontent.fkgl1-1.fna&oh=00_AfAfkzs0dlV00u1dk760dNIB_BDOkxEqPCQC0Pzaxiw4_w&oe=6611517B',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Umuhoza Nadia',
      email: 'umuhozanadia@rnp.com',
      role: 'Software Tester',
      imageUrl: 'https://scontent.fkgl1-1.fna.fbcdn.net/v/t1.6435-9/40551418_2230150627227748_2808149407394955264_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEb2x35V1vyIZJEb91BZ2Uq7wN4op84LpDvA3iinzgukOweuETr9QfS-1toHiwa_aQONE_-kR-MHs5qkvLjzlvd&_nc_ohc=VzXIb_xZlDUAX8FAlWA&_nc_ht=scontent.fkgl1-1.fna&oh=00_AfBvXmWF685VwDVB4NEIyDAMBzJ4_nwMPW4rjzCByGIrEQ&oe=66115079',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Hagenimana Joe',
      email: 'hagenimanaj@rnp.com',
      role: 'Backend Developer',
      imageUrl: 'https://scontent.fkgl1-1.fna.fbcdn.net/v/t1.6435-9/142146787_2879198125658614_5362150710418629982_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF7aSzfDyisQ-8wkksHI_1kR9W_E5dJeAxH1b8Tl0l4DPB0BtDb-1adBE_a_ayBYAMA6P27-F-iCFIY2bRIl_rq&_nc_ohc=TGoOXezowuUAX8nlBb_&_nc_ht=scontent.fkgl1-1.fna&oh=00_AfC3igCDciN9uBE7GkCg8kOm2OStaMuveiOl03kS8HwBRA&oe=6611402D',
      lastSeen: null,
    },
  ]
  
  export default function Team() {
    return (
      <div className="team">
        <ul role="list" className="divide-y divide-gray-100">
        {people.map((person) => (
          <li key={person.email} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{person.role}</p>
              {person.lastSeen ? (
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Online</p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      </div>
    )
  }
  