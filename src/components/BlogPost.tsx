const BlogPost = ({title, image, date, tags}: {title: string, image: string, date: string, tags: string[]}) => {
  return (
    <div className='flex flex-col md:flex-row gap-6 md:gap-8'>
      <a href="#">
        <img src={image} alt={`Blog Post Image for ${title}`} className='w-full md:w-[286px] h-auto md:h-[214px] rounded-[24px]' />
      </a>
      <div className='flex-1'>
        <p className='text-[#CBCBCB] text-[18px] font-[400] sm:text-sm'>{date}</p>
        <h4 className='text-[32px] sm:text-xl md:text-[40px] font-bold'>{title}</h4>
        <div className='flex flex-wrap gap-2 mt-2'>
          {tags.map((tag, index) => (
            <button key={index} className='text-white px-6 text-[12px] py-2 rounded-full border border-white hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer'>{tag}</button>
          ))}
        </div>
      </div>
      <div className='mt-4 md:mt-0 md:my-auto'>
        <a href="#">
          <button className='rounded-[100px] py-4 px-8 bg-white text-black text-[14px] font-[600] hover:bg-black hover:text-white hover:border hover:border-white transition-colors duration-200 cursor-pointer'>Read</button>  
        </a>  
      </div>
    </div>
  )
}

export default BlogPost
