type Info = {
  title: string;
  progress: number;
};

export const ProgressBar = ({ title, progress }: Info) => {
  return (
    <div className="relative">
      <b className="text-lg font-normal text-neutral-100 block mb-3">{title}</b>
      <div className="w-full h-2 rounded flex items-center overflow-hidden growAnimation">
        <div
          className="bg-blue-500 h-2 rounded origin-left"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};
