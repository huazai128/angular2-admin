/**
 * @type {[{path: string; children: [{path: string; data: {menu: {title: string; icon: string; selected: boolean; expanded: boolean; order: number}}},{path: string; data: {menu: {title: string; icon: string; selected: boolean; expanded: boolean; order: number}}; children: [{path: string; data: {menu: {title: string}}}]},{path: string; data: {menu: {title: string; icon: string; selected: boolean; expanded: boolean; order: number}}; children: [{path: string; data: {menu: {title: string}}}]},{path: string; data: {menu: {title: string; icon: string; selected: boolean; expanded: boolean; order: number}}; children: [{path: string; data: {menu: {title: string}}}]},{path: string; data: {menu: {title: string; icon: string; selected: boolean; expanded: boolean; order: number}}; children: [{path: string; data: {menu: {title: string}}},{path: string; data: {menu: {title: string}}},{path: string; data: {menu: {title: string}}},{path: string; data: {menu: {title: string}}},{path: string; data: {menu: {title: string}}}]},{path: string; data: {menu: {title: string; icon: string; selected: boolean; expanded: boolean; order: number}}; children: [{path: string; data: {menu: {title: string}}},{path: string; data: {menu: {title: string}}}]},{path: string; data: {menu: {title: string; icon: string; selected: boolean; expanded: boolean; order: number}}; children: [{path: string; data: {menu: {title: string}}},{path: string; data: {menu: {title: string}}}]},{path: string; data: {menu: {title: string; icon: string; selected: boolean; expanded: boolean; order: number}}; children: [{path: string; data: {menu: {title: string}}},{path: string; data: {menu: {title: string}}},{path: string; data: {menu: {title: string}}},{path: string; data: {menu: {title: string}}}]},{path: string; data: {menu: {title: string; icon: string; selected: boolean; expanded: boolean; order: number}}; children: [{path: [string]; data: {menu: {title: string}}},{path: [string]; data: {menu: {title: string}}}]},{path: string; data: {menu: {title: string; icon: string; selected: boolean; expanded: boolean; order: number}}; children: [{path: string; data: {menu: {title: string; url: string}}},{path: string; data: {menu: {title: string; url: string}}; children: [{path: string; data: {menu: {title: string; url: string}}}]}]},{path: string; data: {menu: {title: string; url: string; icon: string; order: number; target: string}}}]}]}
 * 左侧导航数据路由,baMenu.service:用于处理PAGES_MENU数据；
 * data:用于传递数据
 */
export const PAGES_MENU = [  //路由数据
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',    //标题
            icon: 'ion-android-home',//icon
            selected: false,  //选择当前路由，默认为false
            expanded: false,  //如果有子路由是否展开  默认为false
            order: 0  //
          }
        }
      },
      {
        path: 'editors',
        data: {
          menu: {
            title: 'Editors',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'ckeditor',
            data: {
              menu: {
                title: 'CKEditor',
              }
            }
          }
        ]
      },
      {
        path: 'components',
        data: {
          menu: {
            title: 'Components',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'treeview',
            data: {
              menu: {
                title: 'Tree View',
              }
            }
          }
        ]
      },
      {
        path: 'charts',
        data: {
          menu: {
            title: 'Charts',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'chartist-js',
            data: {
              menu: {
                title: 'Chartist.Js',
              }
            }
          }
        ]
      },
      {
        path: 'ui',
        data: {
          menu: {
            title: 'UI Features',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 300,
          }
        },
        children: [
          {
            path: 'modals',
            data: {
              menu: {
                title: 'Modals',
              }
            }
          }
        ]
      },
      {
        path: 'forms',
        data: {
          menu: {
            title: 'Form Elements',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
        children: [
          {
            path: 'inputs',
            data: {
              menu: {
                title: 'Form Inputs',
              }
            }
          },
          {
            path: 'layouts',
            data: {
              menu: {
                title: 'Form Layouts',
              }
            }
          }
        ]
      },
      {
        path: 'tables',
        data: {
          menu: {
            title: 'Tables',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'basictables',
            data: {
              menu: {
                title: 'Basic Tables',
              }
            }
          },
          {
            path: 'smart',
            data: {
              menu: {
                title: 'Smart Tables',
              }
            }
          }
        ]
      },
      {
        path: 'maps',
        data: {
          menu: {
            title: 'Maps',
            icon: 'ion-ios-location-outline',
            selected: false,
            expanded: false,
            order: 600,
          }
        },
        children: [
          {
            path: 'googlemaps',
            data: {
              menu: {
                title: 'Google Maps',
              }
            }
          },
          {
            path: 'leafletmaps',
            data: {
              menu: {
                title: 'Leaflet Maps',
              }
            }
          },
          {
            path: 'bubblemaps',
            data: {
              menu: {
                title: 'Bubble Maps',
              }
            }
          },
          {
            path: 'linemaps',
            data: {
              menu: {
                title: 'Line Maps',
              }
            }
          }
        ]
      },
      // {
      //   path: '',
      //   data: {
      //     menu: {
      //       title: 'Pages',
      //       icon: 'ion-document',
      //       selected: false,
      //       expanded: false,
      //       order: 650,
      //     }
      //   },
      //   children: [
      //     {
      //       path: ['/login'],
      //       data: {
      //         menu: {
      //           title: 'Login'
      //         }
      //       }
      //     },
      //     {
      //       path: ['/register'],
      //       data: {
      //         menu: {
      //           title: 'Register'
      //         }
      //       }
      //     }
      //   ]
      // },
      {
        path: '',
        data: {
          menu: {
            title: 'Menu Level 1',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: 'Menu Level 1.1',
                url: '#'
              }
            }
          },
          {
            path: '',
            data: {
              menu: {
                title: 'Menu Level 1.2',
                url: '#'
              }
            },
            children: [
              {
                path: '',
                data: {
                  menu: {
                    title: 'Menu Level 1.2.1',
                    url: '#'
                  }
                }
              }
            ]
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'External Link',
            url: 'http://akveo.com',
            icon: 'ion-android-exit',
            order: 700,
            target: '_blank'
          }
        }
      }
    ]
  }
]
