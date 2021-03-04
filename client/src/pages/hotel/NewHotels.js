import React, { useState, Fragment } from "react";
import AlgoliaPlaces from "algolia-places-react";

function NewHotels() {
  //state
  const [values, setValue] = useState({
    title: "",
    content: "",
    location: "",
    image: "",
    price: "",
    from: "",
    to: "",
    bed: "",
  });
  // destructure
  const { title, content, location, image, price, from, to, bed } = values;

  const handleSubmit = (e) => {
    //
  };

  const handleImageChange = (e) => {};

  const handleChange = (e) => {};

  const hotelForm = () => (
    <div className='form-section '>
      <form
        id='form'
        className='card image-upload-card '
        onSubmit={handleSubmit}
      >
        <div className='form-image-upload-btn form-group flex-direction-column'>
          <label
            htmlFor='image'
            className='image-label-btn secondary-heading secondary-color font-l'
          >
            Uplod Image
            <input
              id='image'
              type='file'
              className='form-input'
              name='image'
              onChange={handleImageChange}
              // value={email}
              accept='image/*'
              hidden
            />
          </label>
        </div>
        <div className='form-image-title form-group flex-direction-column'>
          <input
            id='title'
            type='text'
            className='form-input'
            name='title'
            placeholder='Title'
            onChange={handleChange}
            value={title}
            required
          />
          <label
            htmlFor='title'
            className=' secondary-heading secondary-color font-l'
          >
            Title
          </label>
          <div className='validation'>Title is required.</div>
        </div>
        <div className='form-image-price form-group flex-direction-column'>
          <input
            id='price'
            type='number'
            className='form-input'
            name='price'
            placeholder='Price'
            onChange={handleChange}
            value={price}
            required
          />
          <label
            htmlFor='price'
            className=' secondary-heading secondary-color font-l'
          >
            Price
          </label>
          <div className='validation'>Price is required.</div>
        </div>
        <div className='form-image-bed form-group flex-direction-column'>
          <input
            id='bed'
            type='number'
            className='form-input'
            name='bed'
            placeholder='Bed'
            onChange={handleChange}
            value={bed}
            required
          />
          <label
            htmlFor='bed'
            className=' secondary-heading secondary-color font-l'
          >
            Bed
          </label>
          <div className='validation'>bed is required.</div>
        </div>
        <div className='form-image-content form-group flex-direction-column'>
          <textarea
            id='content'
            type='text'
            className='form-input'
            name='content'
            placeholder='Image description'
            onChange={handleChange}
            value={content}
            rows='3'
            cols='70'
            maxLength='100'
            required
          />
        </div>
        <div className='form-image-btn form-group flex-direction-column'>
          <button
            // disabled={!name || !email || !password}
            className='btn btn-primary '
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <Fragment>
      <div className='jumbotron'>
        <div className='container '>
          <h2 className='jumbotron-top text-align-center'>Add Hotel</h2>
        </div>
      </div>
      <div className='container'>
        <div className=' grid-two margin-top-20'>
          <div>{hotelForm()}</div>

          <div className='top-position'>
            Image
            <pre>{JSON.stringify(values, null, 4)}</pre>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default NewHotels;
