const BedRoom = ({ bedNum }) => {
  return (
    <div className="BedRoom" id={`bed-${bedNum}`}>
      Bedroom {bedNum}
    </div>
  );
};

export default BedRoom;
