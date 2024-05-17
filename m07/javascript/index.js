// Create the template for objects that are hotels
// using a object class
class Hotel {
  constructor(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
  }
// this is a function we created to check how many rooms they are based on the inputs we put when creating a new hotel object
  checkAvailability() {
    return this.rooms - this.booked;
  }
}

// Creating hotel objects
// has the hotel name, amount of rooms, and how many rooms booked,
// we get this information based on the constructor that we declared in our object 
const quayHotel = new Hotel('Quay', 40, 25);
const parkHotel = new Hotel('Park', 120, 77);
const sunsetHotel = new Hotel('Sunset', 86, 10);


// a function that will add the hotel based on its hotel object (name) and the id we give to each hotel
// this function is manipulating dom and allowing us to display the information 
const updateHotelDetails = (hotel, id) => {
  const details = `${hotel.name} rooms: ${hotel.checkAvailability()}`;
  const hotelInfo = document.getElementById(id);
  hotelInfo.innerText = details;
};
// we have to call each hotel to make sure it displays, 
// another way that we can do it is creating an array of the hotels information and map thought it to display it 
updateHotelDetails(quayHotel, 'quay');
updateHotelDetails(parkHotel, 'park');
updateHotelDetails(sunsetHotel, 'sunset');
