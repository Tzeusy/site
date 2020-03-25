<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img
                    :src="img"
                    alt="Circle Image"
                    class="img-raised rounded-circle img-fluid"
                  />
                </div>
                <div class="name">
                  <h4 class="title">About Me</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <p>
              <!-- I enjoy reading about geopolitics, debating about ethics, and over-analyzing rational fiction. This site is a 
              consolidation  of my experiences across the various worlds I immerse myself in - be they my latest learnings in 
              the big field of software, my thoughts and ruminations on the fantastical universes of my SF/F exploration, or 
              even just reflections about arbitrary topics. -->
              Hello, and welcome to my profile page! <br />
              I'm Tze How, a 25 year old Singaporean with a Bachelor's of Engineering from the <br />
              Information Systems Technology and Design (ISTD) pillar of the <br />
              Singapore University of Technology and 
              Design (SUTD).
            </p>
            <p style="font-size: 12px">(A mouthful, I know - basically, I studied Computer Science.)</p>
            <p>
              I have experience with design and engineering with software development, data science/engineering, and machine learning. 
              I have also worked in the fields of quantitative finance and blockchain, having built products involving fullstack development, 
              data engineering/pipelining, data science and deep learning, and finance-related portfolio strategy development.
            </p>
            <p> 
              I am currently on the lookout for career opportunities - contact me at tzeuse@gmail.com if you'd like to know more, or if you have proposals!
            </p>
          </div>
          <div class="profile">
            <div class="features text-center">
              <h4 class="title">My Skillset</h4>
              <div class="md-layout">
                <div v-for="column in columns" :key="column.icon" class="md-layout-item md-medium-size-33 md-small-size-100">
                  <div class="info" style="padding:0">
                    <div :class="column.class">
                      <md-icon>{{column.icon}}</md-icon>
                    </div>
                    <h6 class="info-title">{{column.header}}</h6>
                    <p style="color: #666666" v-for="topic in column.topics" :key="topic"> {{topic}}</p>
                  </div>
                </div>
                <div style="width: 100%; height:100px; margin: 20px">
                  <h6 class="info-title" style="margin:10px">
                    Some other potentially relevant skills...
                  </h6>
                  <div style="position: relative; height:60px">
                    <div class="slides">
                      <transition-group 
                        name="slide"
                        mode="out-in"
                        enter-class="slide-in"
                        leave-class="slide-out"
                        enter-active-class="animated slide-in-active"
                        leave-active-class="animated slide-out-active"
                      >
                        <div
                          v-for="(item, index) in slides"
                          :key="index"
                        >
                          <div v-if="index == active">
                            {{item}}
                            <!-- Slide {{ index }} -->
                          </div>
                        </div>
                      </transition-group>
                    </div>
                    <span
                      class="prev"
                      @click="move(-1)"
                    >
                      <i class="fa fa-chevron-left" aria-hidden="true"></i>
                    </span>
                    <span
                      class="next"
                      @click="move(1)"
                    >
                      <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </span>
                    <ul class="dots">
                      <li 
                        v-for="(dot, index) in slides"
                        :class="{ active: index === active }"
                        :key = index
                        @click="jump(index)"
                      ></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class ="section profile-content">  <!-- Projects  -->
        <div class="container" style="width:90%; max-width:none">
          <div class="md-layout">
            <div class="md-layout-item md-size-100 mx-auto">
              <h4 class="title" style='text-align:center; margin:40px;'>Some Fun Projects</h4>
              <!-- <div class="row" v-for="i in Math.ceil(cards.length / 3)" :key="i" style="height:300px; overflow: hidden;">
                <div class="col s12 m6 l4" v-for="card in cards.slice((i-1)*3, i*3)" :key="card.title" style="height:100%; position: relative"> -->
              <div class="row">
                <div class="col s12 m6 l4" v-for="card in cards" :key="card.title" style="height:100%; position: relative; height: 300px; padding-top: 10px; padding-bottom: 10px;">
                  <div class="overlay">
                    <div class="container" style="text-align:center; margin-top:10%; width:80%;">
                      <h6>{{card.title}}</h6>
                      <p style="font-size: 0.8rem">{{card.blurb}}</p>
                      <div>
                        <p v-for="link in card.links" :key="link.icon" style="display: inline; margin:10px">
                          <!-- <p>{{link.icon}}</p> -->
                          <a v-if="link.href" :href="link.href">
                            <i :class="link.icon" style="color:white; font-size: 1.2rem;"></i>
                          </a>
                          <i v-if="link.description" :class="link.icon" style="color:white; font-size: 1.2rem;">
                            <p class="blurbsquared">
                              {{link.description}}
                            </p>
                          </i>
                        </p>
                      </div>
                    </div>
                  </div>
                  <img class="cardImage" :src="card.image"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style='height:50px'></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  bodyClass: "profile-page",
  data() {
    return {
      // slides: 5,
      active: 0,
      slides: [
        "Building IoT applications",
        "3D Printing",
        "Laser Cutting",
        "Project Management/Leadership",
        "Soldering/Woodcrafting",
        "Computer Aided Design",
        "Public Speaking",
        "Competitive Gaming (MOBAs)",
      ],
      cards: [
        {
          image: require("@/assets/img/openai_car.jpg"),
          title: 'OpenAI Car Racing',
          blurb: `An imitation learning approach to solving the 
                  OpenAI Car Racing Gym environment.
                  Done for our 50.021 Artificial Intelligence final project.
                  Implemented Layerwise Relevance Propagation (LRP) to 
                  visualize significant regions deemed by the neural network.
                  `,
          links: [
            {
              'icon': 'fab fa-github',
              'href': 'https://github.com/Tzeusy/RL_car'
            },
            {
              'icon': 'fa fa-trophy',
              'description': "Best Project Award"
            },
            {
              'icon': 'fa fa-newspaper',
              'href': '#/blog/openai-car-racing-adventures'
            },
          ]
        },
        {
          image: require("@/assets/img/jessica.jpg"),
          title: 'Automated Barista',
          blurb: `Project Jessica: Automating a coffee machine and a Niryo One 6-axis 
                  robotic arm to serve coffee to customers at the 2020 SUTD Open House.
                  Built with Python/C#, interfacing between Arduinos and the ROS Stack.
                  `,
          links: [
            {
              'icon': 'fab fa-facebook',
              'href': 'https://www.facebook.com/niryorobotics/videos/621264878315431/'
            },
            {
              'icon': 'fa fa-trophy',
              'description': "Outstanding Contribution to Pillar"
            },
            {
              'icon': 'fa fa-newspaper',
              'href': '#/blog/project-jessica'
            },
          ]
        },
        {
          image: require("@/assets/img/badminton.jpg"),
          title: 'Badminton Court Checking Telegram Bot',
          blurb: `Cycling through Badminton court availabilities on OnePA.sg
                  to quickly check for all badminton court availabilities via Telegram,
                  and skip on the tedious individual checking otherwise necessary.
          `,
          links: [
            {
              'icon': 'fab fa-github',
              'href': 'https://github.com/Tzeusy/badminton_court_bot'
            },
            {
              'icon': 'fa fa-trophy',
              'description': "Wei Hao's eternal gratitude"
            },
          ]
        },
        {
          image: require("@/assets/img/magicka.gif"),
          title: 'Handwaving Magicka',
          blurb: `Using hand motions to play the popular game Magicka using a combination
                  of CV and emulated XBox 360 controllers. Yer a Wizard, Yustynn!
                  `,
          links: [
            {
              'icon': 'fab fa-github',
              'href': 'https://github.com/Yustynn/magicka2-real-spellcasting'
            },
            {
              'icon': 'fas fa-heart-broken',
              'description': "The judges at Hack & Roll 2019 literally forgot to judge us..."
            },
          ]
        },
        {
          image: require("@/assets/img/traceto.jpg"),
          title: 'Ethereum Address Analysis',
          blurb: `A fully automated Ethereum address analysis report to check for violations
                  of MAS guidelines, monitor address general behavior, and identify related
                  exchanges or addresses. Built over summer internship for traceto.io (Codebase proprietary).
                  `,
          links: [
            {
              'icon': 'fa fa-newspaper',
              'href': '#/blog/ethereum-address-analyzer'
            },
          ]
        },
        {
          image: require("@/assets/img/ricing.jpg"),
          title: 'i3 Ricing',
          blurb: `"Ricing" refers to customization of system interfaces - making processes more easily accessible,
                  making a more aesthetic or organized environment, and the like. Once I started using i3, a tiling 
                  window manager, I never looked back!
                  `,
          links: [
            {
              'icon': 'fa fa-newspaper',
              'href': '#/blog/setting-up-of-i3wm-ricing'
            },
          ]
        },
        {
          image: require("@/assets/img/mit.jpg"),
          title: 'SUTD-MIT Global Leadership Programme',
          blurb: `An exchange programme with the Massachusetts Institute of Technology, where we spent 10 weeks 
                  building an electric boat to sail the Charles River in Boston.
                 `,
          links: [
            {
              'icon': 'fa fa-trophy',
              'description': 'Most Technically Challenging Boat'
            },
          ]
        },
        {
          image: require("@/assets/img/binary_sudoku.jpg"),
          title: 'Binary Sudoku',
          blurb: `A Binary Sudoku game on a 8x8 grid built for a Computation Structures 
                  project. Logic programmed on the Mojo FPGA (coded in Lucid); physical setup
                  built using WS2812b Programmable LEDs and plenty of laser cutting/soldering.
                 `,
          links: [
            {
              'icon': 'fab fa-github',
              'href': 'https://github.com/gabrielwong159/fpga'
            },
          ]
        },
        {
          image: require("@/assets/img/myx.jpg"),
          title: 'Myx: Food Ordering',
          blurb: `Vue- based applications for conveyance of foodstuffs between customers 
                  and merchants. Both iOS- and Android- facing, with
                  merchant-facing UI for analytics and profile management.
                  (We developed this at the same time as when Foodpanda, Grab, and the like
                  started scaling up in the market)
                  `,
        },
      ],
      columns: [
        {
          'header': 'Data Science',
          'icon': 'timeline',
          'class': "icon icon-danger",
          'topics': [
            'Deep Learning: PyTorch, TensorFlow',
            'Data Pipelining & Engineering',
            'Databases: PostgreSQL, MongoDB, Redis', 
            'Python Libraries: scikit-learn, numpy, pandas, matplotlib, etc.',
            'Data Engineering',
          ]
        },
        {
          'header': 'Software Engineering',
          'icon': 'code',
          'class': "icon icon-info",
          'topics': [
            'Python',
            'Linux',
            'C',
            'Version Control',
            'Cloud Development (EC2, GCP)',
            'JavaScript (Fullstack Development): Vue, React',
          ]
        },
        {
          'header': 'Quantitative Finance',
          'icon': 'money',
          'class': "icon icon-success",
          'topics': [
            'Portfolio Management',
            'Derivative Pricing',
            'Risk Analysis',
            'Bloomberg Terminal: Python & Excel API familiarity',
          ]
        },
      ]
    };
  },
  methods: {
    move(amount) {
      let newActive = this.active + amount;
      if (newActive > this.slides.length - 1) newActive = 0;
      if (newActive < 0) newActive = this.slides.length - 1;
      this.active = newActive;
    },
    jump(index) {
      this.active = index;
    },
  },
  props: {
    header: {
      type: String,
      // default: require("@/assets/img/city-profile.jpg")
      default: require("@/assets/img/poc.jpg")
    },
    img: {
      type: String,
      default: require("@/assets/img/me.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  mounted: function(){
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}

.cardImage {
  // width: auto; 
  width:450px;
  height:100%; 
  display:block; 
  margin: auto; 
  border-radius:2%;
}

.blurbsquared {
  text-align: center;
  font-family:sans-serif;
  position: absolute;
  opacity: 0;
  left: 0;
  right: 0;
  bottom: -2.5rem;
  background: #000000;
  color: #fff;
}

.blurb {
  text-align: center;
  font-family:sans-serif;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  opacity:0;
  background: #000000;
  color: #fff;
}

.fa-heart-broken:hover .blurbsquared{
  transition: opacity .2s;
  opacity:1;
  z-index: 50;
  filter: alpha(opacity=10);
}

.fa-trophy:hover .blurbsquared{
  transition: opacity .2s;
  opacity:1;
  z-index: 50;
  filter: alpha(opacity=10);
}

$primary: #221e21;

.prev,
.next {
  position: absolute;
  top: 75%;
  width: 20px;
  height: 2spx;
  border: 2px solid $primary;
  color: $primary;
  border-radius: 50%;
  margin-top: -25px;
  margin-left: 0.1vw;
  cursor: pointer;
  line-height: 8px;
  text-align: center;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:hover {
    background: $primary;
    color: #fff;
    transform: scale(1.2);
  }
  
  &:active {
    transform: translate(0, 3px) scale(1.2);
  }
}

.prev {
  left: 0;
}

.next {
  right: 0;
  margin-left: auto;
  margin-right: 0.1vw;
  text-indent: 2px;
}

.dots {
  position: relative;
  display: block;
  width: 100%;
  text-align: center;
  bottom: 20px;
  
  li {
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background: $primary;
    opacity: 0.2;
    display: inline-block;
    margin: 0 3px;
    cursor: pointer;
    transition: opacity 0.4s ease-in-out,width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    
    &.active {
      width: 22px;
      opacity: 1;
    }
  }
}

.slides {
  font-size: 20px;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  
  .animated {
    transition: all 400ms;
    position: absolute;
    transform: translate(-50%, -50%);
  }
  
  .slide-in {
    opacity: 0;
    transform: translate(-40%, -50%);
  }
  
  .slide-in-active {
    transition-delay: 150ms;
  }
  
  .slide-out {
    opacity: 1;
  }
  
  .slide-out-active {
    opacity: 0;
    transform: translate(-60%, -50%);
  }
}

.buttons {
  position: absolute;
  top: 10px;
  left: 10px;
}

button {
  padding: 10px;
  outline: none;
  border: none;
  -webkit-appearance: none;
  background: $primary;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  
  &:disabled {
    opacity: 0.2;
    cursor: no-drop;
  }
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  opacity:0;
  height:280px;
  margin-left: 0.75rem;
  margin-right: 0.75rem;
  margin-top: 10px;
  background: #000000;
  color: #fff;
  border-radius: 2%;
}

.overlay:hover {
  transition: opacity .2s, visibility .2s;
  opacity:0.85;
  filter: alpha(opacity=10);
}

.profile-tabs::v-deep {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>
