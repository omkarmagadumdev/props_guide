import React, { useState } from 'react'
function UserProfileCard({user,theme,action}){

  return(
    <div className={`rounded-2xl border border-white/70 p-5 shadow-md backdrop-blur-sm ${theme.backgroundColor}`}>
      <span className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-2xl shadow-sm'>{user.avatar}</span>
      <div className='mt-3 text-lg font-bold text-slate-900'>{user.name}</div>
      <span className='mt-1 block text-sm text-slate-700'>{user.email}</span>
      <span className='mt-2 inline-block rounded-full bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700'>{user.role}</span>
      <div className='mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-3'>{Object.entries(user.stats).map(([key,value])=>(
        <div className='rounded-lg bg-white/65 px-3 py-2 font-medium text-slate-700'>{value}:{key}</div>
      ))}</div>


    </div>
  )
}
const Complexprops = () => {
  const [message,setMessage] = useState("")
  const users = [
  {
    user: {
      name: "Alice Johnson",
      email: "alice@example.com",
      avatar: "👩",
      role: "Admin",
      status: "Active",
      stats: {
        posts: 145,
        followers: 2834,
        following: 421,
      },
    },
    theme: {
      backgroundColor: "bg-gradient-to-br from-purple-100 to-blue-100",
      textColor: "text-gray-800",
      avatarBg: "bg-purple-300",
      badgeBg: "bg-purple-200",
    },
    actions: {
      primary: {
        label: "View Profile",
        onClick: () => setMessage("Viewing Alice's profile"),
        className: "bg-purple-500 text-white hover:bg-purple-600",
      },
      secondary: {
        label: "Message",
        onClick: () => setMessage("Opening message to Alice"),
        className: "bg-gray-200 text-gray-800 hover:bg-gray-300",
      },
    },
  },

  // 👉 NEW USER OBJECT
  {
    user: {
      name: "Rahul Sharma",
      email: "rahul@example.com",
      avatar: "👨",
      role: "User",
      status: "Active",
      stats: {
        posts: 89,
        followers: 1540,
        following: 300,
      },
    },
    theme: {
      backgroundColor: "bg-gradient-to-br from-green-100 to-teal-100",
      textColor: "text-gray-800",
      avatarBg: "bg-green-300",
      badgeBg: "bg-green-200",
    },
    actions: {
      primary: {
        label: "View Profile",
        onClick: () => setMessage("Viewing Rahul's profile"),
        className: "bg-green-500 text-white hover:bg-green-600",
      },
      secondary: {
        label: "Message",
        onClick: () => setMessage("Opening message to Rahul"),
        className: "bg-gray-200 text-gray-800 hover:bg-gray-300",
      },
    },
  },
];
  return (
    <div className='space-y-8'>
      <div className='rounded-2xl border border-slate-200 bg-white/75 p-6 shadow-lg'>
        <h3 className='mb-4 text-2xl font-bold tracking-tight text-slate-800'>User Profile Card</h3>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>{users.map((userData,index)=>(

          <UserProfileCard key={index} {...userData} />
        ))}</div>
      </div>
    </div>
  )
}

export default Complexprops