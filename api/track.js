// api/track.js - Vercel Serverless Function for Meta CAPI
// export default async function handler(req, res) {
//     // Only allow POST requests
//     if (req.method !== 'POST') {
//       return res.status(405).json({ error: 'Method not allowed' });
//     }
  
//     try {
//       const {
//         event_name,
//         event_time,
//         action_source,
//         user_data,
//         custom_data,
//         event_source_url
//       } = req.body;
  
//       // Get environment variables
//       const PIXEL_ID = process.env.META_PIXEL_ID;
//       const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;
//       console.log(PIXEL_ID, ACCESS_TOKEN);
  
//       if (!PIXEL_ID || !ACCESS_TOKEN) {
//         throw new Error('Missing Meta Pixel ID or Access Token');
//       }
  
//       // Prepare CAPI payload
//       const capiPayload = {
//         data: [{
//           event_name,
//           event_time,
//           action_source,
//           user_data: {
//             client_ip_address: user_data.client_ip_address || req.headers['x-forwarded-for'] || req.connection.remoteAddress,
//             client_user_agent: user_data.client_user_agent || req.headers['user-agent'],
//             fbc: user_data.fbc,
//             fbp: user_data.fbp
//           },
//           custom_data: custom_data || {},
//           event_source_url
//         }],
//         test_event_code: process.env.META_TEST_EVENT_CODE || undefined
//       };
  
//       // Send to Meta CAPI
//       const response = await fetch(
//         `https://graph.facebook.com/v21.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(capiPayload)
//         }
//       );
  
//       const result = await response.json();
  
//       if (!response.ok) {
//         throw new Error(`Meta CAPI Error: ${JSON.stringify(result)}`);
//       }
  
//       // Return success
//       res.status(200).json({
//         success: true,
//         events_received: result.events_received,
//         messages: result.messages || []
//       });
  
//     } catch (error) {
//       console.error('CAPI tracking error:', error);
//       res.status(500).json({
//         error: 'Failed to track event',
//         message: error.message
//       });
//     }
//   }
