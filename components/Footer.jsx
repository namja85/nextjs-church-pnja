export default function Footer() {
  return (
    <footer className=" border-t border-slate-50/[0.06] py-10 px-4">
      <div className="max-w-lg mx-auto flex justify-between items-center">
        <div>
          <p>
            <small>(12223) 경기도 남양주시 평내로29번길 51-30</small>
          </p>
          <p>
            <small>Copyright © 2022 평내중앙교회. All rights reserved.</small>
          </p>
        </div>
        <div>
          <img className="h-6" src="/logo.png" alt="평내중앙교회로고" />
        </div>
      </div>
    </footer>
  );
}
