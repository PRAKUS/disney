import React, { useEffect, useRef, useState } from 'react';
import "./css/imageSlider.css"


// const Btn1 = () => {
// 	return (<div>
		
// 	</div>)
// }

// const Btn2 = () => {
//     return(<div></div>)
// }

const Indicator = (props) => {
	console.log("props",props.child)
	
	const SmallBtn = () => {
		let btn = [];
		for (let i = 1; i < props.child-1; i++) {
			btn.push(
				<div
					key={i}
					className='indicator'
					onClick={() => {
						props.slide(i);
					}}
				/>,
			);
		}
		return btn;
	};
	return (<div className='indicatorContainer' >
		{SmallBtn()}
	</div>)
}

const ImageSlider = (props) => {
	const [counter, setCounter] = useState(1);
	const [childLength, setChildLength] = useState(0);
    const slide = useRef(null);
	
  

    var ElementAdder = () => {
        
			let firstChild = slide.current.children[0].cloneNode(true);
			let lastChild =
				slide.current.children[slide.current.children.length - 1].cloneNode(
					true,
				);
			slide.current.insertBefore(lastChild, slide.current.children[0]);
			slide.current.append(firstChild);
		slide.current.style.transform = `translate(-${100}%)`;
	
    }

    const prev = () => {
		let img = slide.current;
		let childWidth = img.clientWidth;
		if (counter < img.children.length - 1) {
			let newSlider = counter + 1;

			img.style.transition = "all .5s";
			img.style.transform = `translate(-${childWidth * newSlider}px)`;
			setCounter(newSlider);
		}

		if (counter === img.children.length - 2) {
			setTimeout(() => {
				img.style.transition = "none";
				img.style.transform = `translate(-${childWidth})px`;
				setCounter(1);
			}, 502);
		}
        
	}
	
	const indicatorBtn = (newSlider) => {
		let img = slide.current;
		let childWidth = img.clientWidth;
		img.style.transition = "all .5s";
		img.style.transform = `translate(-${childWidth * newSlider}px)`;
		setCounter(newSlider);
		if (counter ===0 ||counter ===img.children.length ) {
		
			setTimeout(() => {
				img.style.transition = "none";
				img.style.transform = `translate(-${childWidth * newSlider}px)`;
				setCounter(img.children.length - 2);
			}, 502);
		}
	}

    // const next = () => {
    //     let img = slide.current;
	// 	let childWidth = img.clientWidth;
	// 	if (counter > 0) {
	// 		let newSlider = counter - 1;
	// 		img.style.transition = "all .5s";
	// 		img.style.transform = `translate(-${childWidth* newSlider}px)`;
	// 		setCounter(newSlider);
	// 	}
	// 	if (counter === 1) {
	// 		console.log("counter=0");
	// 		let length = img.children.length - 2;
	// 		setTimeout(() => {
	// 			img.style.transition = "none";
	// 			img.style.transform = `translate(-${childWidth * length}px)`;
	// 			setCounter(img.children.length - 2);
	// 		}, 502);
	// 	}
    // }

    const auto = (delay) => {
        setTimeout(prev(),delay)
    }

   

    useEffect(() => {
        try {
			ElementAdder()
			setChildLength(slide.current.children.length)
			
		} catch (err) { }
		return () => {
			
		}
        
	}, []);
	

    return (
        <div className='imgSlider'>
			<div className='imgMain' ref={slide}> 
              {props.children}
			</div>
			<div >
				{props.indicator?<Indicator slide={indicatorBtn} child={childLength }/>:""}
				
			</div>
			
        </div>
    );
};


ImageSlider.defaultProps = {
	indicator: false,
	btn1:false,
}

export default ImageSlider;