

export default function ContactSection() {
    return (
      <div className="bg-gray-50 py-10 flex justify-center">
        <div className="flex flex-col md:flex-row gap-6">
          {/* WhatsApp Section */}
          <a
            href="https://wa.me/916371223581"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center group hover:bg-black gap-4 bg-white border border-gray-300 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <img
              src="https://img.icons8.com/color/48/000000/whatsapp.png"
              alt="WhatsApp"
              className="w-10 h-10"
            />
            <div>
              <p className="text-lg font-semibold group-hover:text-white text-gray-700">WhatsApp Directly</p>
              <p className="text-red-500 font-medium">+91-6371-223-581</p>
            </div>
          </a>
  
          {/* Email Section */}
          <a
            href="mailto:sales@manoramaseoservice.com"
            className="flex items-center group gap-4 hover:bg-black  bg-white border border-gray-300 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <img
              src="https://img.icons8.com/color/48/000000/new-post.png"
              alt="Email"
              className="w-10 h-10"
            />
            <div>
              <p className="text-lg font-semibold group-hover:text-white text-gray-700">Email Us Questions Here</p>
              <p className="text-red-500 font-medium">sales@manoramaseoservice.com</p>
            </div>
          </a>
        </div>
      </div>
    );
  }
  