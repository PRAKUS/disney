import React from 'react';
import "./css/home.css"
import { ImageSlider,Title } from '../../Components';
const banner = [
                "assets/images/badging5.jpg",
                "assets/images/badging4.jpg",
                "assets/images/scale16.jpg",
                "assets/images/scale6.jpg",
  ]

const channels = ["assets/images/scale17.jpg",
    "assets/images/scale10.jpg",
    "assets/images/scale7.jpg",
    "assets/images/scale2.jpg",
    "assets/images/scale8.jpg",
]
const recommendation=["assets/images/scale11.jpg",
    "assets/images/scale3.jpg",
    "assets/images/scale12.jpg",
    "assets/images/scale.jpg",
    
]
const newToDisney=["assets/images/scale9.jpg",
    "assets/images/scale15.jpg",
    "assets/images/badging3.jpg",
    "assets/images/scale13.jpg",
    
]    
const originals=["assets/images/badging2.jpg",
    "assets/images/badging.jpg",
    "assets/images/badging7.jpg",
    "assets/images/badging6.jpg",
    
]  
const trending=["assets/images/scale5.jpg",
    "assets/images/scale18.jpg",
    "assets/images/scale4.jpg",
    "assets/images/scale14.jpg",
    
]



const Home = () => {
    return (
        <div>
            <div className='gradientBackground'>
                 <ImageSlider indicator={true}>
                {banner.map((image,index) => {
                    return (<div className='sliderItem'><img className='sliderImg'   key={`${index}`} src={`${image}`} alt={`${image}`}/></div>)
                })}
                </ImageSlider>
                <div className='channelContainer container'>
                        {channels.map((channel) => {
                            return (
                                <div className="channelItem cursor">
                                    <img style={{width:"100%"}} src={channel} alt={channel} />
                                </div>
                                
                        )
                        })}
                </div>
                <Title data={recommendation} title="Recommend For You" />
               
            </div> 
            <Title data={newToDisney} title="New to Disney+" />
            <Title data={originals} title="Originals" />
            <Title data={trending} title="Trending" />   
        </div>
           
       
    );
};

export default Home;