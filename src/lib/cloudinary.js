// ++++++++++++++++++++++++++++++++++++++++++++++++
// Fetching individual photos

export async function search(options = {}) {
  // spreading options from params
  const params = {
    ...options,
  };
  // the next cursor is used to send a new request to the server
  if (options.nextCursor) {
    params.next_cursor = options.nextCursor;
    delete params.nextCursor;
  }

  const paramString = Object.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join('&');
  const results = await fetch(
    // to change the direction of the results I used the parameter, direction.
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image?${paramString}`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.CLOUDINARY_API_KEY +
            ':' +
            process.env.CLOUDINARY_API_SECRET
        ).toString('base64')}`,
      },
    }
  ).then((r) => r.json());

  return results;
}

// ++++++++++++++++++++++++++++++++++++++++++++++++
// Fetching folders for when the app will be scaled later

export async function getFolders(options = {}) {
  const results = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/folders`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.CLOUDINARY_API_KEY +
            ':' +
            process.env.CLOUDINARY_API_SECRET
        ).toString('base64')}`,
      },
    }
  ).then((r) => r.json());

  return results;
}

export function mapImageResources(resources) {
  return resources.map((resource) => {
    // destructuring height and width straight from resource
    const { width, height } = resource;
    return {
      id: resource.asset_id,
      title: resource.public_id,
      image: resource.secure_url,
      width,
      height,
    };
  });
}
