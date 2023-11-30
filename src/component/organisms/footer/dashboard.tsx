export function FooterDashboard() {
  var year = new Date().getFullYear();
  return (
    <div className="flex justify-center text-white font-light text-sm px-6 py-2 bg_blue">
      &copy; {year} Lawan.id - All Rights Reserved.
    </div>
  )
}