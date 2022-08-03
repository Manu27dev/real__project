import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-graph',
  template: `
    <div class="container-dash">
      <div class="navigation">
        <ul>
          <li>
            <a href="">
              <span class="icon"><ion-icon name="logo-apple"></ion-icon></span>
              <span class="title">Brand name</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="icon"
                ><ion-icon name="home-outline"></ion-icon
              ></span>
              <span class="title">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="icon"
                ><ion-icon name="people-circle-outline"></ion-icon
              ></span>
              <span class="title">Customer</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="icon"
                ><ion-icon name="chatbox-ellipses-outline"></ion-icon
              ></span>
              <span class="title">message</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="icon"
                ><ion-icon name="help-outline"></ion-icon
              ></span>
              <span class="title">help</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="icon"
                ><ion-icon name="settings-outline"></ion-icon
              ></span>
              <span class="title">Settings</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="icon"
                ><ion-icon name="lock-closed-outline"></ion-icon
              ></span>
              <span class="title">Password</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="icon"
                ><ion-icon name="log-out-outline"></ion-icon
              ></span>
              <span class="title">Sign out</span>
            </a>
          </li>
        </ul>
      </div>

      <!-- main dashboard -->

      <div class="main-dash">
        <div class="topbar">
          <div class="toggle">
            <ion-icon name="menu-outline"></ion-icon>
          </div>
          <!-- search -->
          <div class="search">
            <label for="">
              <input type="text" placeholder="search here" />
              <ion-icon name="search-outline"></ion-icon>
            </label>
          </div>
          <!-- user -->
          <div class="user">
            <img src="../../../../../assets/img/image1.jpg" alt="" />
          </div>
        </div>
        <!-- cards -->
        <div class="cardbox">
          <div class="card">
            <div>
              <div class="numbers">1,564</div>
              <div class="card-name">Daily view</div>
            </div>
            <div class="iconbox">
              <ion-icon name="eye-outline"></ion-icon>
            </div>
          </div>
          <div class="card">
            <div>
              <div class="numbers">80</div>
              <div class="card-name">Sales</div>
            </div>
            <div class="iconbox">
              <ion-icon name="cart-outline"></ion-icon>
            </div>
          </div>
          <div class="card">
            <div>
              <div class="numbers">364</div>
              <div class="card-name">Comments</div>
            </div>
            <div class="iconbox">
              <ion-icon name="chatbubbles-outline"></ion-icon>
            </div>
          </div>
          <div class="card">
            <div>
              <div class="numbers">$7,897</div>
              <div class="card-name">Earning</div>
            </div>
            <div class="iconbox">
              <ion-icon name="cash-outline"></ion-icon>
            </div>
          </div>
        </div>
        <div class="details">
          <!-- deta list -->
          <div class="recent-orders">
            <div class="card-header">
              <h2>Recent orders</h2>
              <a href="" class="btn"> View All</a>
            </div>
            <table>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Star refrigeratos</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td><span class="status delivered">Delivered</span></td>
                </tr>
                <tr>
                  <td>Star refrigeratos</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td><span class="status pending">Delivered</span></td>
                </tr>
                <tr>
                  <td>Star refrigeratos</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td><span class="status delivered">Delivered</span></td>
                </tr>
                <tr>
                  <td>Star refrigeratos</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td><span class="status pending">Delivered</span></td>
                </tr>
                <tr>
                  <td>Star refrigeratos</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td><span class="status return">Delivered</span></td>
                </tr>
                <tr>
                  <td>Star refrigeratos</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td><span class="status delivered">Delivered</span></td>
                </tr>
                <tr>
                  <td>Star refrigeratos</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td><span class="status progress">Delivered</span></td>
                </tr>
                <tr>
                  <td>Star refrigeratos</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td><span class="status delivered">Delivered</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- new customers -->
          <div class="recent-customers">
            <div class="card-header">
              <h2>Recent Customers</h2>
            </div>
            <table>
              <tr>
                <td>
                  <div class="imgbox">
                    <img src="../../../../../assets/img/image1.jpg" alt="" />
                  </div>
                </td>
                <td>
                  <h4>Emanuele <br /><span>Italy</span></h4>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="imgbox">
                    <img src="../../../../../assets/img/image1.jpg" alt="" />
                  </div>
                </td>
                <td>
                  <h4>Emanuele <br /><span>Italy</span></h4>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="imgbox">
                    <img src="../../../../../assets/img/image1.jpg" alt="" />
                  </div>
                </td>
                <td>
                  <h4>Emanuele <br /><span>Italy</span></h4>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="imgbox">
                    <img src="../../../../../assets/img/image1.jpg" alt="" />
                  </div>
                </td>
                <td>
                  <h4>Emanuele <br /><span>Italy</span></h4>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="imgbox">
                    <img src="../../../../../assets/img/image1.jpg" alt="" />
                  </div>
                </td>
                <td>
                  <h4>Emanuele <br /><span>Italy</span></h4>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="imgbox">
                    <img src="../../../../../assets/img/image1.jpg" alt="" />
                  </div>
                </td>
                <td>
                  <h4>Emanuele <br /><span>Italy</span></h4>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="imgbox">
                    <img src="../../../../../assets/img/image1.jpg" alt="" />
                  </div>
                </td>
                <td>
                  <h4>Emanuele <br /><span>Italy</span></h4>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [``],
})
export class DashboardGraphComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
