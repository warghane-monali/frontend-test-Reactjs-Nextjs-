## Frontend Development Assessment - ReactJS + NextJS

## 1.Figma Design Reference

    -https://www.figma.com/design/9rXDHVD1na0Smz16eKDEnL/Frontend-Test?node-id=169-62&t=20tj1IxgjBRHgGnF-0

## 2.ER Diagram Visualization(Entities and Attributes)

      ## 1.Patient
        PatientID (PK)
        Name
        MobileNumber
        WhatsAppNumber
        Email
        Address
    
      ## 2.Session
        SessionID (PK)
        PatientID (FK → Patient.PatientID)
        Date
        TimeSlotID (FK → TimeSlot.TimeSlotID)
        SessionTypeID (FK → SessionType.SessionTypeID)
    
      ## 3.TimeSlot
        TimeSlotID (PK)
    
      ## 4.SessionType
        SessionTypeID (PK)
        TypeName (e.g., "In-Person", "Online")

## 3.Implementation Details

    1. Frameworks / Libraries Used:
        ReactJS, NextJS, TailwindCss
    2.Routing:
        NextJS built-in routing system(folder based)
    3.Responsive Design:
        Implemented for Web and Mobile screens
    4.Animations & Interactivity:
        JS events and CSS animations applied to improve UX
  
## 4.Project Folder structure

    PATIENT-MANAGEMENT
        |--->PUBLIC
                |--->ASSETS
        |--->SRC
             |--->APP
                   |--->COMPONENTS
                          |--->BUTTONS.JS
                          |--->MOBILEWRAPPER.JS
                          |--->PASTSESSIONS.JS
                          |--->SESSIONTIMEMODAL.JS
                          |--->UPCOMMINGSESSIONS.JS
                  |--->DASHBOARD.JS
                            |--->PAGE.JS
                  |--->DOCTORS.JS
                            |--->PAGE.JS
                  |--->PATIENTDETAILS.JS'
                            |--->PAGE.JS
                  |--->PATIENTSCHEDULE.JS
                            |--->PAGE.JS
                  |--->PAGE.JS
                  |--->LAYOUT.JS
                
## 5.How to Run
    1. Clone the repository:
       ```bash
      git clone https://github.com/warghane-monali/frontend-test-Reactjs-Nextjs-.git
      npm install
      npm run dev
    
    Open http://localhost:3000 to view.

## 6.Screens
     http://localhost:3000/dashboard
     http://localhost:3000/doctors
     http://localhost:3000/patientSchedule
     http://localhost:3000/patientDetails
     
## 7.Page load time
    Tested on https://pagespeed.web.dev/
        1.Mobile
            https://pagespeed.web.dev/analysis/https-frontend-test-reactjs-nextjs-netlify-app-dashboard/vrcexzc6cf?form_factor=mobile
        2.Dekstop
            https://pagespeed.web.dev/analysis/https-frontend-test-reactjs-nextjs-netlify-app-dashboard/vrcexzc6cf?form_factor=desktop
