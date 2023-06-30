import React from "react";
import { act } from "react-dom/test-utils";

function Summary() {
  return (
    <div className="flex flex-row justify-between mt-10 pl-10 pr-10">
      <div className="flex-1 space-y-5 p-5 bg-primary text-white">
        <div className="text-3xl font-bold ">
          Learn How to Launch a successful podcast
        </div>
        <div className="text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </div>
        <div>
          <button className="btn-color font-bold text-sm p-2 pl-5 pr-5 rounded">
            Sign up Now
          </button>
        </div>
      </div>
      <div className="flex-1 space-y-5"></div>
    </div>
  );
}
interface Feature {
  title: string;
  info: string;
}
function AboutTheCourse() {
  const features: Array<Feature> = [
    {
      title: "Interactive Features",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      title: "Interactive Features",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      title: "Interactive Features",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      title: "Interactive Features",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
  ];

  const getInfoCard = (feature: Feature, key: number) => {
    const oddStyle: any = {
      position: "relative",
      top: "10px",
    };
    return (
      <div
        className="border-2 p-1 border-solid border-purple-950 rounded w-48 mb-5"
        key={key}
        style={key % 2 ? oddStyle : null}
      >
        <div className="text-sm font-bold">{feature.title}</div>
        <div className="text-xs">{feature.info}</div>
      </div>
    );
  };

  return (
    <div className="flex flex-row justify-between mt-10 pl-10 pr-10">
      <div className="flex-1 space-y-5 p-5 ">
        <div className="flex flex-row justify-around flex-wrap">
          {features.map((feature, index) => {
            return getInfoCard(feature, index);
          })}
        </div>
      </div>
      <div className="flex-1 space-y-5">
        <div className="mt-10 ml-10">
          <div className="text-3xl font-bold mb-5">Abount the Course</div>
          <div className="font-sm mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unkno
          </div>
          <div>
            <button className="btn-color font-bold text-sm p-2 pl-5 pr-5 rounded">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Plan extends Feature {
  price: string;
  features: string[];
  active?: boolean;
}
function Plans() {
  const plans: Array<Plan> = [
    {
      title: "Basic Plan",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      price: "$ 54",
      features: [
        "Free access to video class",
        "Free access to video class",
        "Free access to video class",
      ],
    },
    {
      title: "Premium Plan",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      price: "$ 54",
      features: [
        "Free access to video class",
        "Free access to video class",
        "Free access to video class",
      ],
      active: true,
    },
    {
      title: "Basic Plan",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      price: "$ 54",
      features: [
        "Free access to video class",
        "Free access to video class",
        "Free access to video class",
      ],
    },
  ];

  const getPlanCard = (plan: Plan, index: number) => {
    const isActivePlan = plan.active;
    const c = isActivePlan
      ? "p-5 rounded-xl border bg-primary text-white"
      : "border border-purple-950 p-5 rounded-xl";
    return (
      <div className={c} key={index}>
        <div className="text-md font-bold mb-5">{plan.title}</div>
        <div className="text-xs mb-5">{plan.info}</div>
        <div className="mb-5">
          <span
            className={`text-2xl font-bold ${
              isActivePlan ? "text-white" : "text-purple-900"
            }`}
          >
            {plan.price}&nbsp;
          </span>
          <span
            className={`text-xl ${
              isActivePlan ? "text-white" : "text-purple-950"
            }`}
          >
            /month
          </span>
        </div>
        <div className="mb-5">
          <ul className="list-disc ml-5">
            {plan.features.map((feature, key) => {
              return (
                <li className="text-xs font-bold" key={key}>
                  {feature}
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <button className="btn btn-white border p-2 pl-5 pr-5 rounded border-purple-900 text-xs font-light bg-white text-purple-950">
            Start free trial
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col mt-10 pl-10 pr-10">
      <div className="flex flex-row justify-center w-full">
        <div className="max-w-xs">
          <div className="text-2xl font-bold text-center mb-5">
            Choose your plan
          </div>
          <div className="text-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between space-x-10 mt-16">
        {plans.map((plan, index) => {
          return getPlanCard(plan, index);
        })}
      </div>
    </div>
  );
}

function StarRating() {
  return (
    <div className="flex items-center">
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>First star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Second star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Third star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Fourth star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Fifth star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    </div>
  );
}

interface Review {
  reviewFrom: string;
  company: string;
  rating: number;
  info: string;
}

function ReviewFromCustomers() {
  const [cSize, setCSize] = React.useState(3);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const reviews: Array<Review> = [
    {
      reviewFrom: "Lolla smith",
      company: "Microsoft",
      rating: 5,
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    },
    {
      reviewFrom: "Lolla smith",
      company: "Microsoft",
      rating: 5,
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    },
    {
      reviewFrom: "Lolla smith",
      company: "Microsoft",
      rating: 5,
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    },
    {
      reviewFrom: "Lolla smith",
      company: "Microsoft",
      rating: 5,
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    },
    {
      reviewFrom: "Lolla smith",
      company: "Microsoft",
      rating: 5,
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    },
    {
      reviewFrom: "Lolla smith",
      company: "Microsoft",
      rating: 5,
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    },
    {
      reviewFrom: "Lolla smith",
      company: "Microsoft",
      rating: 5,
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    },
  ];

  const getReviewCard = (review: Review, index: number) => {
    return (
      <div className="border border-solid rounded-lg p-2" key={index}>
        <div className="flex gap-5">
          <div>
            <img
              className="w-10 h-10 rounded-full"
              src="https://static.vecteezy.com/system/resources/thumbnails/009/397/892/small/woman-face-expression-clipart-design-illustration-free-png.png"
              alt={review.reviewFrom}
            />
          </div>
          <div>
            <div className="text-sm font-bold">{review.reviewFrom}</div>
            <div className="text-xs">{review.company}</div>
          </div>
        </div>
        <div>
          <StarRating />
        </div>
        <div style={{ fontSize: "10px" }}>{review.info}</div>
      </div>
    );
  };

  const getSliderBtn = () => {
    const btns = [];
    for (let i = 0; i < reviews.length / 3; i++) {
      btns.push(
        <button
          className={activeIndex === i ? "bg-primary" : "bg-gray-300"}
          style={{
            width: "10px",
            height: "10px",
            margin: "5px",
            borderRadius: "50%",
          }}
          onClick={() => setActiveIndex(i)}
        ></button>
      );
    }
    return btns;
  };

  return (
    <div className="flex flex-col mt-10 pl-10 pr-10">
      <div className="text-2xl font-bold">Review from customers</div>
      <div className="text-xs mt-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. <br />
        Lorem Ipsum has been the industry
      </div>

      <div className="grid grid-cols-3 gap-3 mt-5">
        {reviews
          .filter((_i, index) => {
            return index >= activeIndex && index < activeIndex + 3;
          })
          .map((item, index) => {
            return getReviewCard(item, index);
          })}
      </div>
      <div className="flex flex-row justify-center w-full">
        {getSliderBtn()}
      </div>
    </div>
  );
}

function LastQuote() {
  return (
    <div className="flex flex-col mt-10 pl-10 pr-10 justify-center w-full text-center items-center">
      <div className="max-w-xl">
        <div className="font-bold text-xl">We have what you're looking for</div>
        <div className="text-purple-900 mt-5" style={{ fontSize: "10px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type
        </div>
      </div>
    </div>
  );
}

export default function Contents() {
  return (
    <div>
      <Summary />
      <AboutTheCourse />
      <Plans />
      <ReviewFromCustomers />
      <LastQuote />
    </div>
  );
}
