import React from 'react'
import {useParams} from 'react-router-dom'

import Placelist from '../components/Placelist';



const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State  Building",
    description: "One of the most famous sky Scrapper in the World",
    imageUrl:
      "https://images.unsplash.com/photo-1555109307-f7d9da25c244?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1waXJlJTIwc3RhdGUlMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: 40.7482082,
      lng: -73.9869998,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Emp. State  Building",
    description: "One of the most famous sky Scrapper in the World",
    imageUrl:
      "https://images.unsplash.com/photo-1555109307-f7d9da25c244?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1waXJlJTIwc3RhdGUlMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: 40.7482082,
      lng: -73.9869998,
    },
    creator: "u2",
  },
];

const UserPlaces = () =>  {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

return <Placelist items={loadedPlaces}/>

}



export default UserPlaces;