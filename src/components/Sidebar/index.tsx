import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Pencil,
  User,
} from "phosphor-react"
import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.svg"

import "./style.css"

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img src={logo} alt="Twitter Logo" className="logo" />

      <nav className="main-navigation">
        <a href="">
          <House weight="fill" />
          <span>Home</span>
        </a>
        <a href="">
          <Hash />
          <span>Explore</span>
        </a>
        <a href="">
          <Bell />
          <span>Notifications</span>
        </a>
        <a href="">
          <Envelope />
          <span>Messages</span>
        </a>
        <a href="">
          <BookmarkSimple />
          <span>Bookmarks</span>
        </a>
        <a href="">
          <FileText />
          <span>Lists</span>
        </a>
        <a href="">
          <User />
          <span>Profile</span>
        </a>
        <a href="">
          <DotsThreeCircle />
          <span>More</span>
        </a>
      </nav>

      <button className="new-tweet" type="button">
        <Pencil />
        <span>Tweet</span>
      </button>
    </aside>
  )
}
