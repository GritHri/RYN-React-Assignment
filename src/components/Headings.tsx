import Logo from '../assets/List.svg'

const Headings = ({title}: {title: string}) => {
  return (
    <div className='flex gap-2 sm:gap-1 items-center'>
      <img src={Logo} alt="Logo" className='h-8 sm:h-6 w-auto my-auto' />
      <h3 className='text-[40px] sm:text-2xl font-bold'>{title}</h3>
    </div>

  )
}

export default Headings
