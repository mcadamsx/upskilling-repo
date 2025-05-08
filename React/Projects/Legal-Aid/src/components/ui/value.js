function Value(props) {
    return (
        <div className=' bg-transparent text-center flex flex-col items-center justify-center leading-loose tracking-wide border-r border-gray p-4 text-sm'>
        <div className='border border-blue-800 rounded-full p-4  text-5xl text-blue-800 '>
        <props.Icon/>
        </div>
        <p>{props.title}</p>
        <p>{props.desc}</p>
      </div>
    );
}

export default Value;