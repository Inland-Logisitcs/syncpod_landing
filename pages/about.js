
import Head from "next/head";

export default function About() {
  const gettingStartedSteps = [
    {
      title: "Download App",
      description: "Get the Syncpodd app from the App Store or Google Play.",
      align: "left",
      icon: "syncpod_landing/download.svg",
    },
    {
      title: "Register",
      description: "Create your account to access all features.",
      align: "right",
      icon: "syncpod_landing/register.svg",
    },
    {
      title: "Scan Packages",
      description: "Use the in-app scanner to add your packages.",
      align: "left",
      icon: "syncpod_landing/scan.svg",
    },
    {
      title: "Optimize Route",
      description: "Let our smart algorithm find the most efficient route.",
      align: "right",
      icon: "syncpod_landing/route.svg",
    },
  ];

  return (
    <div className="bg-white text-black">
      <Head>
        <title>About Us - Syncpodd</title>
        <meta
          name="description"
          content="Learn more about Syncpodd and our mission to revolutionize the logistics industry."
        />
      </Head>

      <main className="main">
        <section className="app-preview">
          <div className="preview-overlay"></div>
          <div className="preview-content">
            <h2>SyncPOD</h2>
            <p>
              Experience the power of seamless logistics management with our
              intuitive and powerful app.
            </p>
          </div>
        </section>

        <section className="mission mission-card">
          <h2>Our Mission</h2>
          <p>
            To provide the fastest, most reliable delivery service, connecting people and businesses with what they need, when they need it.
          </p>
        </section>

        <section className="getting-started">
          <h2>Getting Started</h2>
          <div className="steps-timeline">
            {gettingStartedSteps.map((step, index) => (
              <div key={index} className={`step-card ${step.align}`}>
                <div className="step-content">
                  <img src={step.icon} alt={`${step.title} icon`} className="step-icon" />
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <style jsx>{`
        .main {
          padding: 0;
        }

        .app-preview {
          position: relative;
          text-align: center;
          padding: 8rem 2rem;
          color: white;
          background: url('/syncpod_landing/mockup-app.png') no-repeat center center/contain;
          background-color: #014055;
        }

        .preview-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.4),
            rgba(0, 0, 0, 0.8)
          );
          z-index: 1;
        }

        .preview-content {
          position: relative;
          z-index: 2;
        }

        .app-preview h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-weight: bold;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .app-preview p {
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .mission {
          padding: 4rem 2rem;
          text-align: center;
        }

        .mission-card {
            background-color: #f9f9f9;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            margin: 4rem auto;
            max-width: 800px;
        }

        .getting-started {
          padding: 4rem 2rem;
          text-align: center;
        }

        .mission h2,
        .getting-started h2 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          font-weight: bold;
        }

        .mission p {
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .steps-timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .steps-timeline::after {
          content: '';
          position: absolute;
          width: 6px;
          background-color: #014055;
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -3px;
        }

        .step-card {
          padding: 20px 40px;
          position: relative;
          background-color: inherit;
          width: 50%;
        }

        .step-card.left {
          left: 0;
        }

        .step-card.right {
          left: 50%;
        }

        .step-card::after {
          content: '';
          position: absolute;
          width: 25px;
          height: 25px;
          right: -17px;
          background-color: white;
          border: 4px solid #014055;
          top: 15px;
          border-radius: 50%;
          z-index: 1;
        }

        .step-card.right::after {
          left: -16px;
        }

        .step-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px 30px;
          background-color: #f9f9f9;
          position: relative;
          border-radius: 6px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .step-icon {
          width: 40px;
          height: 40px;
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
}
