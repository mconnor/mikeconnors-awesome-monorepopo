const Skel = () => {
  return (
    <div className="flex w-52 flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 shrink-0 skeleton rounded-full"></div>
        <div className="flex flex-col gap-4">
          <div className="h-4 w-20 skeleton"></div>
          <div className="h-4 w-28 skeleton"></div>
        </div>
      </div>
      <div className="h-32 w-full skeleton"></div>
    </div>
  );
};

export default Skel;
