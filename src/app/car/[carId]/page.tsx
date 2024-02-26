export default function Car({ params }: { params: { carId: string } }) {
  return (
    <>
      <div>CarId: {params.carId}</div>
      <div>e</div>
    </>
  );
}
