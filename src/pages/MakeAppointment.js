import React from 'react'
import Appointment from '../components/Appointment'

const MakeAppointment = () => {
  return (
    <>
      <div class="container-xxl py-5 page-header position-relative mb-5">
            <div class="container py-5 ">
                <h1 class="display-2 text-white animated slideInDown mb-4">Appointment</h1>
            </div>
        </div>

        <Appointment />
    </>
  )
}

export default MakeAppointment
