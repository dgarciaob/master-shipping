import { GlobeDemo } from "@/components/Globe3D";
import { InfiniteMovingCardsDemo } from "@/components/Infinite-Moving-Cards";
import { NavigationMenuDemo } from "@/components/Navigation";
import { Switcher } from "@/components/Switcher";
import { Map, Ship, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { CL, CO, EC, PA, PE, US } from "country-flag-icons/react/3x2";
import { Button } from "@/components/ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import fs from "fs";
import DottedMap from "dotted-map";
import { TeamCard } from "@/components/TeamCard";

const map = new DottedMap({ height: 60, grid: "diagonal", countries: ["PER"] });

map.addPin({
  lat: -4.5770783194849045,
  lng: -81.27992381597724,
  svgOptions: { color: "#d6ff79", radius: 0.4 },
});
map.addPin({
  lat: 48.8534,
  lng: 2.3488,
  svgOptions: { color: "#1F1F1F", radius: 0.4 },
});

const svgMap = map.getSVG({
  radius: 0.22,
  color: "#1F1F1F",
  shape: "hexagon",
  backgroundColor: "#FFFFFF",
});

fs.writeFileSync("public/images/customMap.svg", svgMap);

export default function Home() {
  return (
    <main>
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-8 py-4">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src="/images/msBlueLogo.svg"
              alt="Master Shipping Logo"
              width={36}
              height={36}
            />
          </Link>
          <Link
            href={"/"}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-avgard uppercase text-[#132C77] text-lg">
              Master Shipping
            </p>
            <p className="font-kabel text-[#132C77] text-sm">
              Ship Brokers & Agents
            </p>
          </Link>
        </div>
        <NavigationMenuDemo />
        <Switcher />

        {/* TODO: Mobile Navbar */}
      </nav>

      {/* Hero Section */}

      <section className="mx-auto">
        <Image
          src="/images/mshero.png"
          alt="Master Shipping Hero Image"
          width={1920}
          height={1080}
          className="w-full object-contain relative"
        />
        <div className="absolute top-64 left-8 flex flex-col space-y-8">
          <h1 className="font-bold text-5xl text-white font-avgard">
            Master <br /> Shipping
          </h1>
          <h2 className="font-normal text-2xl text-white max-w-72">
            Leading Ship Agency solutions for US & Latam.
          </h2>
        </div>
      </section>

      <section className="mt-28 mx-auto max-w-7xl">
        <h2 className="text-center font-bold text-5xl">Our Business Lines</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-28 items-center">
          <div
            className="w-[24rem] rounded-md h-full hover:shadow-xl hover:opacity-90 transition-all duration-200 relative"
            id="brokers"
          >
            <Image
              src="/images/msShipBrokers.png"
              alt="Ship Brokers"
              width={1000}
              height={1000}
              className="object-cover h-full rounded-lg"
            />
            <div className="flex flex-col space-y-4 px-7 pb-7 absolute bottom-0">
              <h3 className="font-bold text-3xl text-white">Ship Brokers</h3>
              <p className="font-normal text-xl text-white">
                Ship broking for bulk, break-bulk cargoes & containers. Review
                of calculations and demurrage claims mitigation
              </p>
            </div>
          </div>
          <div
            className="w-[24rem] rounded-md h-full hover:shadow-xl hover:opacity-90 transition-all duration-200 relative"
            id="agents"
          >
            <Image
              src="/images/msShipAgents.png"
              alt="Ship Agents"
              width={1000}
              height={1000}
              className="object-cover h-full rounded-lg"
            />
            <div className="flex flex-col space-y-4 px-7 pb-7 absolute bottom-0">
              <h3 className="font-bold text-3xl text-white">Ship Agents</h3>
              <p className="font-normal text-xl text-white">
                We serve the industry attending any type of ship and crew
                nationality with the highest standards.
              </p>
            </div>
          </div>
          <div
            className="w-[24rem] rounded-md h-full hover:shadow-xl hover:opacity-90 transition-all duration-200 relative"
            id="isotanks"
          >
            <Image
              src="/images/msIsotanks.png"
              alt="Isotanks & Flexitanks"
              width={1000}
              height={1000}
              className="object-cover h-full rounded-lg"
            />
            <div className="flex flex-col space-y-4 px-7 pb-7 absolute bottom-0">
              <h3 className="font-bold text-3xl text-white">Logistic Agents</h3>
              <p className="font-normal text-xl text-white">
                Isotanks & Flexitanks operations. Holistic approach to your
                logistic needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-28 mx-auto bg-[#F3F7F8] py-20">
        <h2 className="text-center font-bold text-5xl mb-2 md:mb-4">
          What we have achieved
        </h2>
        <p className="text-[#999999] text-2xl font-semibold text-center">
          Trusted by the industry worldwide
        </p>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 mt-28 items-center md:px-14 px-7">
          <div className="bg-white w-[26rem] h-44 rounded-lg flex flex-col space-y-2 justify-center px-14">
            <div className="flex items-center space-x-5">
              <div className="rounded-md h-12 w-12 bg-[#E0F2FE] flex items-center justify-center">
                <Ship size={32} className="text-[#3B82F6]" />
              </div>
              <p className="text-3xl text-black font-bold">+13</p>
            </div>
            <p className="font-medium text-[#999999] text-xl">
              years transforming the industry
            </p>
          </div>
          <div className="bg-white w-[26rem] h-44 rounded-lg flex flex-col space-y-2 justify-center px-14">
            <div className="flex items-center space-x-5">
              <div className="rounded-md h-12 w-12 bg-[#FEF3C7] flex items-center justify-center">
                <Map size={32} className="text-[#EAB308]" />
              </div>
              <p className="text-3xl text-black font-bold">+40</p>
            </div>
            <p className="font-medium text-[#999999] text-xl">
              ports attended across Latam
            </p>
          </div>
          <div className="bg-white w-[26rem] h-44 rounded-lg flex flex-col space-y-2 justify-center px-14">
            <div className="flex items-center space-x-5">
              <div className="rounded-md h-12 w-12 bg-[#D1FAE5] flex items-center justify-center">
                <Users size={32} className="text-[#059669]" />
              </div>
              <p className="text-3xl text-black font-bold">+100</p>
            </div>
            <p className="font-medium text-[#999999] text-xl">
              partners rely their business on us
            </p>
          </div>
        </div>
      </section>

      <section className="mt-28 mx-auto">
        <h2 className="text-center font-bold text-5xl mb-2 md:mb-8">
          Trusted By
        </h2>
        <InfiniteMovingCardsDemo />
      </section>

      <section className="mt-20 relative flex flex-col md:flex-row items-center px-28 justify-center">
        <Image
          src="/images/blurredMap.png"
          alt="Dotted Map"
          width={1000}
          height={1000}
          className="w-full object-contain max-h-[42rem] absolute top-20 -left-[32rem] opacity-60"
        />
        <div className="flex flex-col items-center justify-center space-y-16 z-50">
          <h2 className="font-bold text-5xl">International Coverage</h2>
          <p className="text-[#71717A] font-light text-xl max-w-96">
            Our direct coverage includes all the ports in Ecuador and Perú while
            our sub-agency network allows us to expand our services upto the
            rest of The Americas.
          </p>
        </div>
        <GlobeDemo />
      </section>

      <section className="px-28 mt-28">
        <h3 className="text-[#71717A] font-semibold text-2xl">
          Select the country
        </h3>
        <div className="flex flex-row mt-8 justify-between">
          <Button variant={"ghost"} className="w-22 h-22">
            <US className="w-20 h-15 rounded" />
          </Button>
          <Button variant={"ghost"} className="w-22 h-22">
            <PE className="w-20 h-15 rounded" />
          </Button>
          <Button variant={"ghost"} className="w-22 h-22">
            <EC className="w-20 h-15 rounded" />
          </Button>
          <Button variant={"ghost"} className="w-22 h-22">
            <CO className="w-20 h-15 rounded" />
          </Button>
          <Button variant={"ghost"} className="w-22 h-22">
            <PA className="w-20 h-15 rounded" />
          </Button>
          <Button variant={"ghost"} className="w-22 h-22">
            <CL className="w-20 h-15 rounded" />
          </Button>
        </div>
      </section>

      <section className="px-28 mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <Image
          src="/images/customMap.svg"
          alt="Custom Map"
          width={1000}
          height={1000}
          className="w-full object-contain max-h-[42rem]"
        />
        <div className="">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Talara</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Paita</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Bayovar</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Salaverry</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Chimbote</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Callao</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="mx-auto mt-28">
        <h2 className="text-center font-bold text-5xl mb-2 md:mb-4">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          <TeamCard />
        </div>
      </section>
    </main>
  );
}
