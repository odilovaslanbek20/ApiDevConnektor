import { FaUser } from 'react-icons/fa'

export default function CreateProfile() {
	return (
		<section className='mt-[90px] max-w-3xl mx-auto  p-6 bg-white shadow-lg rounded-lg'>
			<div className='text-center'>
				<h1 className='text-[#17a2b8] text-3xl font-bold'>
					Create Your Profile
				</h1>
				<p className='flex items-center justify-center gap-2 text-lg text-gray-700 mt-2 '>
					<FaUser className='text-[#17a2b8] max-[455px]:hidden' />
					<span>Let's get some information to make your profile</span>
				</p>
			</div>

			<div className='mt-6'>
				<label className='block mb-2 text-gray-700 font-medium'>
					Professional Status
				</label>
				<select className='w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#17a2b8] outline-none'>
					<option value='Select Professional Status'>
						Select Professional Status
					</option>
					<option value='Developer'>Developer</option>
					<option value='Junior Developer'>Junior Developer</option>
					<option value='Senior Developer'>Senior Developer</option>
					<option value='Manager'>Manager</option>
					<option value='Student or Learning'>Student or Learning</option>
					<option value='Instructor or Teacher'>Instructor or Teacher</option>
					<option value='Intern'>Intern</option>
					<option value='Other'>Other</option>
				</select>
				<p className='text-sm text-gray-500 mt-1'>
					Give us an idea of where you are at in your career
				</p>
			</div>

			<form className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
				<div>
					<label className='block text-gray-700 font-medium'>Company</label>
					<input
						className='w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#17a2b8] outline-none'
						type='text'
						placeholder='Company'
					/>
				</div>

				<div>
					<label className='block text-gray-700 font-medium'>Website</label>
					<input
						className='w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#17a2b8] outline-none'
						type='url'
						placeholder='Website'
					/>
				</div>

				<div>
					<label className='block text-gray-700 font-medium'>Location</label>
					<input
						className='w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#17a2b8] outline-none'
						type='text'
						placeholder='Location'
					/>
				</div>

				<div>
					<label className='block text-gray-700 font-medium'>Skills</label>
					<input
						className='w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#17a2b8] outline-none'
						type='text'
						placeholder='* Skills'
					/>
				</div>

				<div className='md:col-span-2'>
					<label className='block text-gray-700 font-medium'>
						GitHub Username
					</label>
					<input
						className='w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#17a2b8] outline-none'
						type='text'
						placeholder='GitHub Username'
					/>
				</div>

				<div className='md:col-span-2'>
					<label className='block text-gray-700 font-medium'>Bio</label>
					<textarea
						className='w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#17a2b8] outline-none'
						placeholder='A short bio of yourself'
					></textarea>
				</div>

				<div className='md:col-span-2 text-center'>
					<button className='w-full bg-[#17a2b8] text-white py-2 px-4 rounded-lg hover:bg-[#138496] transition'>
						Submit
					</button>
				</div>
			</form>
		</section>
	)
}
