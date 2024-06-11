import React from "react";
import { PiCaretRight, PiCaretLeft } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Section } from "./styles";
import { DishCard } from "../DishCard";
import { formToJSON } from "axios";

export function CardsSection({ dishesData = null, sectionName, admin = false }) {
  // temp variable for testing
  const cardsData = [
    {
      id: 1, title: "Prato food explorer 1", imageFile: "/src/assets/samples/dish_image_large_1.png", 
      description: "Descrição genérica de prato para página inicial do foodexplorer.", price: 25.90 
    },
    {
      id: 2, title: "Prato foodexplorer 2", imageFile: "/src/assets/samples/dish_image_large_2.png", 
      description: "Descrição genérica de prato para página inicial do foodexplorer.", price: 23.90 
    },
    {
      id: 3, title: "Prato food explorer 3", imageFile: "/src/assets/samples/dish_image_large_3.png", 
      description: "Descrição genérica de prato para página inicial do foodexplorer.", price: 19.90 
    },
    {
      id: 4, title: "Prato foodexplorer 4", imageFile: "/src/assets/samples/dish_image_large_4.png", 
      description: "Descrição genérica de prato para página inicial do foodexplorer.", price: 27.90 
    },
    {
      id: 5, title: "Prato foodexplorer 5", imageFile: "/src/assets/samples/dish_image_large_5.png", 
      description: "Descrição genérica de prato para página inicial do foodexplorer.", price: 23.50 
    },
    {
      id: 6, title: "Prato foodexplorer 6", imageFile: "/src/assets/samples/dish_image_large_6.png", 
      description: "Descrição genérica de prato para página inicial do foodexplorer.", price: 18.90 
    },
    {
      id: 7, title: "Prato foodexplorer 7", imageFile: "/src/assets/samples/dish_image_large_7.png", 
      description: "Descrição genérica de prato para página inicial do foodexplorer.", price: 30.90 
    }
  ]

  return (
    <Section >    
      <h1>{sectionName}</h1>
      
      <div id='slider'>        
        <Swiper
          slidesPerView={4}
          spaceBetween={16}
          navigation
          loop={true}
          mousewheel={true}
          // autoplay={{
          //   delay: 1000,
          //   disableOnInteraction: true,
          // }}
        >
          {
            cardsData.map((card) => (
              <SwiperSlide
                key={card.id}
              >
                <DishCard 
                  title={card.title}
                  imageFile={card.imageFile}
                  description={card.description}
                  price={card.price} 
                  favorite={false}         
                />
              </SwiperSlide>
            )
          )}
          <div id='gradient-layer'>
            <PiCaretLeft />
            <PiCaretRight />
          </div>
        </Swiper>
      
      </div>            
    </Section>
  )  
}