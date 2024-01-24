import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiLogoFacebook } from "react-icons/bi";
import { TiSocialTwitter } from "react-icons/ti";
import { TbMailFilled } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io"
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[--background] footer">
      <div className="container mx-auto p-10 pt-40">
        <div className="grid lg:grid-cols-4 text-white gap-8">
          <div className="col-item">
            <div className='w-40 h-10'>
              <AspectRatio ratio={16/4}>
                <Image src={'/images/basilico_logo.png'} alt="Logo" fill className="object-cover"/>
              </AspectRatio>
            </div>
            <div className="py-4">
              Our buzzy food-hall style concept is inspired by international dining styles, especially in Asia. Explore the following fast-action food 
            </div>
            <ul className="flex gap-5 social-footer">
              <li>
                <Link href="#">
                    <BiLogoFacebook />
                </Link>
              </li>
              <li>
                <Link href="#">
                    <TiSocialTwitter />
                </Link>
              </li>
              <li>
                <Link href="#">
                    <TbMailFilled />
                </Link>
              </li>
              <li>
                <Link href="#">
                    <IoLogoInstagram />
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-item">
            <div className="widget">
              <h5>Opening time</h5>
              <ul>
                  <li>Mon - Fri : 9:00am - 22:00pm</li>
                  <li>Sat: 10:00am - 23:00pm</li>
                  <li>Sun: 5:00pm - 23:00pm</li>
                  <li>Holidays: Closed</li>
                  <li>Happy Hours: 18:00pm - 20:00pm</li>
              </ul>
            </div>
          </div>

          <div className="col-item">
            <div className="location widget">
              <h5>Location</h5>
              <ul>
                <li>
                    <span>Address:
                    </span>
                    <p>4517 Washington Ave.
                        Manchester, Kentucky 39495, USA
                    </p>
                </li>
                <li>
                    <span>Booking &amp; Contact:
                    </span>
                    <p>Basilicofood123@gmail.com
                    </p>
                    <p>978-212-8600</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-item">
            <div className="widget">
              <h5>Latest New</h5>
              <p className="mb-8">Register your email to not miss any news and offers from us! </p>
              <form>
                  <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email *" />
                  </div>
                  <div className="form-check mt-4">
                      <input type="checkbox" className="form-check-input mr-4" id="exampleCheck1" />
                      <label className="form-check-label" htmlFor="exampleCheck1">
                        I agree to the Privacy
                          Policy
                      </label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    <FaTelegramPlane  size={24}/>
                  </button>
              </form>
            </div>
          </div>
        </div>        
      </div>
    </footer>
  )
}

export default Footer