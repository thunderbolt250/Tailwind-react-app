import './cssfile.css'
import joe from './images/joe.jpg'
import kg2 from './images/kg2.png'
import kevine from './images/kevine.jpeg'
import nadia from './images/nadia.jpeg'
import tbolt from './images/tbolt.jpeg'
import Ngabo from './images/ngabo.jpg'
const people = [
    {
      name: 'Kamana Gervas',
      email: 'kamana@rnp.com',
      role: 'Co-Founder / CEO & Frontend Developer',
      imageUrl: kg2,
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
      facebook: 'https://www.facebook.com/profile.php?id=100007187657053',
    },
    {
      name: 'Ngabo Prince',
      email: 'ngaboprince@rnp.com',
      role: 'Backend Developer',
      imageUrl: Ngabo,
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
      facebook: 'https://www.facebook.com/princengabo1999',
    },
    {
      name: 'Mfuranzima Kevine',
      email: 'mfuranzimak@rnp.com',
      role: 'Software Designer & Business Relations',
      imageUrl: kevine,
      lastSeen: null,
      facebook: 'https://www.facebook.com/kevine.mfuranzima',
    },
    {
      name: 'Mwesigye Emmy',
      email: 'mwesigye@rnp.com',
      role: 'Front-end Developer',
      imageUrl: tbolt,
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
      facebook: 'https://www.facebook.com/thunderbolt250',
    },
    {
      name: 'Umuhoza Nadia',
      email: 'umuhozanadia@rnp.com',
      role: 'Software Tester',
      imageUrl: nadia,
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
      facebook: 'https://www.facebook.com/umuhoza.nadia.520',
    },
    {
      name: 'Hagenimana Joe',
      email: 'hagenimanaj@rnp.com',
      role: 'Backend Developer',
      imageUrl: joe,
      lastSeen: null,
      facebook: 'https://www.facebook.com/hagenimana.joseph.5',
    },
  ]
  
  export default function Team() {
    return (
      <>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" style={{ marginTop: '30px', paddingLeft:'20%' }}>RNP software development team members and their roles.</h2>
      <div className="team" style={{ marginTop: '20px' }}>
        <ul  className="divide-y divide-gray-100">
        {people.map((person) => (
          <li key={person.email} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <a href={person.imageUrl} target='_blank' rel='noreferrer'><img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" /></a>
              <div className="min-w-0 flex-auto">
              <a href={person.facebook} target='_blank' rel='noreferrer'><p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p></a>
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

      <div className="flex -space-x-2 overflow-hidden" style={{ marginTop: '20px', paddingLeft: '45%' }}>
      <a href='https://www.facebook.com/profile.php?id=100007187657053' target='_blank'>
      <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src={kg2}
          alt=""
        />
        </a>
        <a href='https://www.facebook.com/princengabo1999' target='_blank' rel='noreferrer'>
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src={Ngabo}
          alt=""
        />
        </a>
        <a href='https://www.facebook.com/kevine.mfuranzima' target='_blank' rel='noreferrer'>
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src={kevine}
          alt=""
        />
        </a>
        <a href='https://www.facebook.com/thunderbolt250' target='_blank' rel='noreferrer'>
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src={tbolt}
          alt=""
        />
        </a>
        <a href='https://www.facebook.com/umuhoza.nadia.520' target='_blank' rel='noreferrer'>
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src={nadia}
          alt=""
        />
        </a>
        <a href='https://www.facebook.com/hagenimana.joseph.5' target='_blank' rel='noreferrer'>
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src={joe}
          alt=""
        />
        </a>
      </div>

      </>
    )
  }
  