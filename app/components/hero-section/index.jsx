// @flow strict

import { userData } from "@/data/user-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";


function HeroSection({ profile }) {

  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="flex flex-col items-start justify-center rounded-lg p-3 lg:py-5 lg:px-12 bg-primary-bg h-full">
          <div className="flex w-full justify-center">
            <Image
              src={profile.avatar_url}
              width={128}
              height={128}
              alt={profile.name}
              className="rounded-full transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
            />
          </div>
          <p className="text-gray-300 text-sm lg:text-base my-4 lg:my-6 text-center">
            {profile.bio}
          </p>

          <div className="w-full flex justify-center items-center gap-5">
            <Link
              href={userData.github}
              target='_blank'
              className="transition-all text-teal-500 hover:scale-125 duration-300"
            >
              <BsGithub size={24} />
            </Link>
            <Link
              href={userData.linkedIn}
              target='_blank'
              className="transition-all text-teal-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={24} />
            </Link>
            <Link
              href={userData.twitter}
              target='_blank'
              className="transition-all text-teal-500 hover:scale-125 duration-300"
            >
              <FaTwitterSquare size={24} />
            </Link>
          </div>
        </div>

        <div className="h-full from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-400">const</span>
                <span className="mr-2 text-violet-400">coder</span>
                <span className="mr-2 text-pink-400">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-green-400">{profile.name}</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">location:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-green-400">{profile.location}</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">followers:</span>
                <span className="text-orange-400">{profile.followers}</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">following:</span>
                <span className="text-orange-400">{profile.following}</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">repositories:</span>
                <span className="text-orange-400">{profile.public_repos}</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">hireable:</span>
                <span className="text-orange-400">{profile?.hireable.toString()}</span>
                <span className="text-gray-400">,</span>
              </div>
              <div><span className="text-gray-400">{`};`}</span></div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;