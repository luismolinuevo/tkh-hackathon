import React from "react";

const Form = () => {
  return (
    <div className="flex flex-col w-full px-20 py-10 gap-10">
      <div className="flex border">
        <div className="flex flex-col w-3/6  gap-5">
          <div className="text-6xl">Name</div>
          <div className="text-3xl">
            Brief information describing goal and experience for the user
          </div>
        </div>
        <div className=" flex ms-auto flex-col justify-end items-end w-2/6 gap-4 ">
          <div className="me-10">
            <label htmlFor="location" className="text-2xl ">
              Location:{" "}
            </label>
            <input
              className="w-48 border h-10"
              type="text"
              name="location"
              value=""
            />
          </div>
          <div className="me-10">
            <label htmlFor="living-situation" className="text-2xl">
              Living Situation:{" "}
            </label>
            <select
              className="w-48 border h-10"
              name="living-situation"
              id="living-situation"
            >
              <option value="urban">Urban</option>
              <option value="suburban">Suburban</option>
              <option value="rural">Rural</option>
            </select>
          </div>
        </div>
      </div>
      <div className="border p-5">
        <div className="flex  border justify-between items-center">
          <div className="text-4xl">Recommendations</div>
          <div>Sort by ▼ </div>
        </div>
        {/* Posts container */}
        <div className="flex flex-col mt-4 gap-4">
          <div className="flex border h-40">
            <div className="border w-40">
              <img src="" alt="image" />
            </div>
            <div className="flex flex-col border flex-1 ">
              <div>Title: </div>
              <div>
                Description: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Asperiores laboriosam expedita optio impedit, eaque maxime
                aliquam sunt illo sint, hic quam iste velit quod corporis
                distinctio praesentium error laborum tempore?
              </div>
              <div>Recommendated Products</div>
            </div>
            <div className="border w-40">
              <div>Upvote</div>
              <div>Like Number</div>
              <div>Downvote</div>
            </div>
          </div>
          <div className="flex border h-40">
            <div className="border w-40">
              <img src="" alt="image" />
            </div>
            <div className="flex flex-col border flex-1 ">
              <div>Title: </div>
              <div>
                Description: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Asperiores laboriosam expedita optio impedit, eaque maxime
                aliquam sunt illo sint, hic quam iste velit quod corporis
                distinctio praesentium error laborum tempore?
              </div>
              <div>Recommendated Products</div>
            </div>
            <div className="border w-40">
              <div>Upvote</div>
              <div>Like Number</div>
              <div>Downvote</div>
            </div>
          </div>
          <div className="flex border h-40">
            <div className="border w-40">
              <img src="" alt="image" />
            </div>
            <div className="flex flex-col border flex-1 ">
              <div>Title: </div>
              <div>
                Description: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Asperiores laboriosam expedita optio impedit, eaque maxime
                aliquam sunt illo sint, hic quam iste velit quod corporis
                distinctio praesentium error laborum tempore?
              </div>
              <div>Recommendated Products</div>
            </div>
            <div className="border w-40">
              <div>Upvote</div>
              <div>Like Number</div>
              <div>Downvote</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
