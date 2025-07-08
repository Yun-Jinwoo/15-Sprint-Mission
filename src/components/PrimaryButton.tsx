import Image from "next/image";

export default function PrimaryButton({ type, disabled, children, ...props }) {
  if (type !== "add" && type !== "delete" && type !== "modify") return null;
  let iconPath = "";
  let background = "";
  let textColor = "";
  switch (type) {
    case "add":
      iconPath = disabled ? "/icons/plus-black.svg" : "/icons/plus-white.svg";
      background = "bg-violet-600";
      textColor = disabled ? "text-black" : "text-white";
      break;
    case "delete":
      iconPath = "/icons/cross.svg";
      background = "bg-rose-500";
      textColor = "text-white";
      break;
    case "modify":
      iconPath = "/icons/check.svg";
      background = "bg-lime-300";
      textColor = "text-black";
      break;
  }
  return (
    <button
      className={`${background} w-164 h-52 flex items-center justify-center text-h3 font-bold ${textColor} disabled:bg-white rounded-3xl border-2 border-slate-900 shadow-button`}
      disabled={disabled}
      {...props}
    >
      {iconPath && (
        <div className="flex gap-4">
          <Image src={iconPath} alt="버튼 아이콘" width={16} height={16} />
          {children}
        </div>
      )}
    </button>
  );
}
