import React from 'react';
const World = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center display-6 fw-bold my-5">
          India floods: At least 95 killed, hundreds of thousands evacuated
        </h1>
        <p className=" d-flex justify-content-center">
          At least 95 people have been killed by monsoon flooding in southern
          and western India, while hundreds of thousands have been evacuated
          from their homes, according to reports The flooding and landslides
          caused by the heavy seasonal rainfall have left some areas cut off.
          Officials have called on those affected to try to seek shelter on
          higher ground. India is affected by monsoon rains between June and
          September. While crucial to replenishing water supplies, the heavy
          rainfall also results in death and destruction each year state police
          spokesman Pramod Kumar told AFP news agency..
        </p>
        <div className="text-center mt-5">
          <img
            src="https://images.unsplash.com/photo-1567439393571-b5f32ddf9b2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
            alt="flood"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </>
  );
};
export default World;
