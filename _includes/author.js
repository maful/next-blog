export default function Author() {
  return (
    <div>
      <div className="mx-auto">
        <div
          className="blog-author-card mx-auto px-4 md:px-8 py-8 md:py-12 mb-10"
          itemProp="author"
          itemScope
        >
          <div className="flex flex-row flex-wrap items-center">
            <div className="mr-4 md:mr-8 mb-2 md:mb-0">
              <a
                aria-label="Blog Author Picture"
                href="/"
                className="w-20 h-20 md:w-32 md:h-32 overflow-hidden block rounded-full"
              >
                <img
                  alt="Blog Author Picture"
                  className="block w-full"
                  src="https://cdn.hashnode.com/res/hashnode/image/upload/v1599477053426/_9ohW5jxv.jpeg?w=400&amp;h=400&amp;fit=crop&amp;crop=faces&amp;auto=format&amp;q=60"
                  itemProp="image"
                />
              </a>
            </div>
            <div className="w-full md:flex-1">
              <div className="flex flex-row flex-wrap items-center mb-2 justify-between">
                <h3 className="text-2xl w-full md:w-auto mb-2 md:mb-0 font-bold text-black mr-5">
                  <a href="/">Maful Prayoga</a>
                </h3>
                <div className="follow-man flex flex-row text-gray-700 text-sm items-center">
                  <div>
                    <button className="button-transparent flex flex-row items-center">
                      <svg
                        className="w-5 h-5 fill-current mr-2"
                        viewBox="0 0 512 512"
                      >
                        <path d="M384 250v12c0 6.6-5.4 12-12 12h-98v98c0 6.6-5.4 12-12 12h-12c-6.6 0-12-5.4-12-12v-98h-98c-6.6 0-12-5.4-12-12v-12c0-6.6 5.4-12 12-12h98v-98c0-6.6 5.4-12 12-12h12c6.6 0 12 5.4 12 12v98h98c6.6 0 12 5.4 12 12zm120 6c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-32 0c0-119.9-97.3-216-216-216-119.9 0-216 97.3-216 216 0 119.9 97.3 216 216 216 119.9 0 216-97.3 216-216z"></path>
                      </svg>
                      <span>Follow</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="prose">
                <p>
                  It is your attitude, more than your aptitude, that will
                  determine your altitude
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
