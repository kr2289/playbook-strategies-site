export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span>
          &copy; {new Date().getFullYear()} Playbook Strategies &middot;
          Katherine Rowe
        </span>
        <span>Based in Austin, TX. Working globally.</span>
      </div>
    </footer>
  );
}
