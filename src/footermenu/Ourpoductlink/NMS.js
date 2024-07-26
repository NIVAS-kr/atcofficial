import React from 'react';
import './NMS.css';

const NMS = () => {
  return (
    <div className="container-nms">
      <div className="row" >
        <div className="col-md-13">
          <div className="col-lg-7" style={{marginLeft:"0px", width:"100%"}}>
            <h1>Network Infrastructure</h1>
            <p>This category includes traditional networking equipment including routers and switches. Many of these devices support standardised MIBs for the collection of system and network statistics.</p>
            <p>ATC NMS has the capability to collect configuration and statistics for many networking services and protocols from compatible devices including the routing protocols BGP, OSPF, network health monitoring protocols such as Cisco's IP-SLA as well as many industry-standard technologies including VLANs, VRFs, Pseudowires, MAC-based traffic accounting and several vendor-specific and standardised discovery protocols.</p>
          </div>
        </div>
      </div>

      <div className="row" >
        {[
          "https://atcinfocom.in/supportimg/3com.png", 'https://atcinfocom.in/supportimg/adtran.png', 'https://atcinfocom.in/supportimg/alcatel-lucent.png', 'https://atcinfocom.in/supportimg/allied-telesis.png', 'https://atcinfocom.in/supportimg/arista.png', 
          'https://atcinfocom.in/supportimg/avaya.png', 'https://atcinfocom.in/supportimg/brocade.png', 'https://atcinfocom.in/supportimg/calix.png', 'https://atcinfocom.in/supportimg/ciena.png', 'https://atcinfocom.in/supportimg/cisco.png', 
          'https://atcinfocom.in/supportimg/dasan.png', 'https://atcinfocom.in/supportimg/dell.png', 'https://atcinfocom.in/supportimg/enterasys.png', 'https://atcinfocom.in/supportimg/extreme-networks.png', 'https://atcinfocom.in/supportimg/force10.png', 
          'https://atcinfocom.in/supportimg/gcom.png', 'https://atcinfocom.in/supportimg/h3c.png', 'https://atcinfocom.in/supportimg/hp.png', 'https://atcinfocom.in/supportimg/huawei.png', 'https://atcinfocom.in/supportimg/juniper.png', 
          'https://atcinfocom.in/supportimg/korenix.png', 'https://atcinfocom.in/supportimg/lenovo.png', 'https://atcinfocom.in/supportimg/mellanox.png', 'https://atcinfocom.in/supportimg/mikrotik.png', 'https://atcinfocom.in/supportimg/netgear.png', 
          'https://atcinfocom.in/supportimg/raisecom.png', 'https://atcinfocom.in/supportimg/supermicro.png', 'https://atcinfocom.in/supportimg/ubnt.png', 'https://atcinfocom.in/supportimg/zhone.png', 'https://atcinfocom.in/supportimg/zte.png'
        ].map((img, index) => (
          <div className="col-md-3" key={index}>
            <img src={img} className="img-polaroid" alt={`img-${index}`} />
          </div>
        ))}
      </div>
      <hr/>
      
      <div className="row" style={{ marginTop: '30px'}}>
        <div className="col-md-12">
          <h1>Security and Network Control Devices</h1>
          <p>This category includes firewalls, load balancers, proxy servers, antivirus appliances, VPN concentrators, IDS devices and other security-related network appliances. In many instances ATC NMS includes support for the collection of platform-specific metrics from these devices, including session and connection numbers and load balancer configuration and statistics.</p>
        </div>
      </div>

      <div className="row" style={{ marginTop: '10px' }}>
        {[
          'https://atcinfocom.in/supportimg/arbor.png', 'https://atcinfocom.in/supportimg/bluecoat.png', 'https://atcinfocom.in/supportimg/cisco.png', 'https://atcinfocom.in/supportimg/citrix.png', 'https://atcinfocom.in/supportimg/endian.png', 
          'https://atcinfocom.in/supportimg/f5.png', 'https://atcinfocom.in/supportimg/fireeye.png', 'https://atcinfocom.in/supportimg/fortinet.png', 'https://atcinfocom.in/supportimg/juniper.png', 'https://atcinfocom.in/supportimg/nokia.png', 
          'https://atcinfocom.in/supportimg/opnsense.png', 'https://atcinfocom.in/supportimg/paloalto.png', 'https://atcinfocom.in/supportimg/procera.png', 'https://atcinfocom.in/supportimg/sonicwall.png'
        ].map((img, index) => (
          <div className="col-md-3" key={index}>
            <img src={img} className="img-polaroid" alt={`img-${index}`} />
          </div>
        ))}
      </div>
      <hr/>

      <div className="row" style={{ marginTop: '30px' }}>
        <div className="col-md-12">
          <h1>Wireless Infrastructure</h1>
          <p>This category includes WiFi access points and controllers as well as licensed and unlicensed fixed point-to-point wireless devices. ATC NMS often provides support for the collection of specialised wireless metrics from these devices, such as transmit and received power levels, signal-to-noise ratios, and link capacity.</p>
        </div>
      </div>

      <div className="row" style={{ marginTop: '10px' }}>
        {[
          'https://atcinfocom.in/supportimg/aerohive.png', 'https://atcinfocom.in/supportimg/alvarion.png', 'https://atcinfocom.in/supportimg/bridgewave.png', 'https://atcinfocom.in/supportimg/cambium.png', 'https://atcinfocom.in/supportimg/cisco.png', 
          'https://atcinfocom.in/supportimg/exalt.png', 'https://atcinfocom.in/supportimg/juniper.png', 'https://atcinfocom.in/supportimg/proxim.png', 'https://atcinfocom.in/supportimg/ruckus.png', 'https://atcinfocom.in/supportimg/saf.png', 
          'https://atcinfocom.in/supportimg/trango.png', 'https://atcinfocom.in/supportimg/tranzeo.png', 'https://atcinfocom.in/supportimg/ubnt.png'
        ].map((img, index) => (
          <div className="image-grid" key={index}>
            <img src={img} className="img-polaroid" alt={`img-${index}`} />
          </div>
        ))}
      </div>
      <hr/>

      <div className="row" style={{ marginTop: '30px' }}>
        <div className="image-grid">
          <h1>Servers, Appliances and Workstations</h1>
          <p>This category of devices is well served in ATC NMS, with a specialised agent being available to enhance data collection from Linux-based systems as well as IPMI and libvirt support to collect additional physical hardware and virtualised server information.</p>
        </div>
      </div>

      <div className="row" style={{ marginTop: '10px' }}>
        {[
          'https://atcinfocom.in/supportimg/aix.png', 'https://atcinfocom.in/supportimg/dragonflybsd.png', 'https://atcinfocom.in/supportimg/freebsd.png', 'https://atcinfocom.in/supportimg/ibm.png', 'https://atcinfocom.in/supportimg/infoblox.png', 
          'https://atcinfocom.in/supportimg/netbsd.png', 'https://atcinfocom.in/supportimg/novell.png', 'https://atcinfocom.in/supportimg/openindiana.png', 'https://atcinfocom.in/supportimg/solaris.png', 'https://atcinfocom.in/supportimg/vmware.png', 
          'https://atcinfocom.in/supportimg/windows.png'
        ].map((img, index) => (
          <div className="col-md-3" key={index}>
            <img src={img} className="img-polaroid" alt={`img-${index}`} />
          </div>
        ))}
      </div>

      <hr />

      <div className="row" style={{ marginTop: '30px' }}>
        <div className="image-grid">
          <h1>Storage Infrastructure</h1>
          <p>Storage device support in ATC NMS ranges from consumer-level NAS devices to enterprise-level Big Data SAN storage systems. On select platforms ATC NMS is able to collect in-depth statistics about the devices, including sensors, status indicators, and drive health warnings.</p>
        </div>
      </div>

      <div className="row" style={{ marginTop: '10px' }}>
        {[
          'https://atcinfocom.in/supportimg/buffalo.png', 'https://atcinfocom.in/supportimg/datadomain.png', 'https://atcinfocom.in/supportimg/dell.png', 'https://atcinfocom.in/supportimg/emc.png', 'https://atcinfocom.in/supportimg/ibm.png', 
          'https://atcinfocom.in/supportimg/netgear.png', 'https://atcinfocom.in/supportimg/open-e.png', 'https://atcinfocom.in/supportimg/qnap.png'
        ].map((img, index) => (
          <div className="col-md-3" key={index}>
            <img src={img} className="img-polaroid" alt={`img-${index}`} />
          </div>
        ))}
      </div>

      <hr />

      <div className="row" style={{ marginTop: '30px' }}>
        <div className="image-grid">
          <h1>Voice and Communications Infrastructure</h1>
          <p>This category includes devices such as VoIP servers, PBX systems, and other communication hardware supported by ATC NMS.</p>
        </div>
      </div>

      <div className="row" style={{ marginTop: '10px' }}>
        <div className="image-grid">
          <img src="https://atcinfocom.in/supportimg/mitel.png" className="img-polaroid" alt="mitel" />
        </div>
      </div>

      <hr />

      <div className="row" style={{ marginTop: '30px' }}>
        <div className="image-grid">
          <h1>UPS and Power Distribution</h1>
          <p>The category of UPS and power distribution covers devices from many major global vendors and many regional vendors. Support is available for the collection of most power-related metrics such as voltage, frequency, current, system temperatures, and battery health as well as generic status indicators.</p>
        </div>
      </div>

      <div className="row" style={{ marginTop: '10px' }}>
        {[
          'https://atcinfocom.in/supportimg/apc.png', 'https://atcinfocom.in/supportimg/aten.png', 'https://atcinfocom.in/supportimg/avocent.png', 'https://atcinfocom.in/supportimg/ccpower.png', 'https://atcinfocom.in/supportimg/delta.png', 
          'https://atcinfocom.in/supportimg/eaton.png', 'https://atcinfocom.in/supportimg/eltek.png', 'https://atcinfocom.in/supportimg/gamatronic.png', 'https://atcinfocom.in/supportimg/liebert.png', 'https://atcinfocom.in/supportimg/mge.png', 
          'https://atcinfocom.in/supportimg/rittal.png'
        ].map((img, index) => (
          <div className="image-grid" key={index}>
            <img src={img} className="img-polaroid" alt={`img-${index}`} />
          </div>
        ))}
      </div>

      <hr />

      <div className="row" style={{ marginTop: '30px' }}>
        <div className="col-md-12">
          <h1>Out of Band Management and Remote Access</h1>
          <p>Support for several OOB and remote access platforms from a number of vendors is included in ATC NMS.</p>
        </div>
      </div>

      <div className="row" style={{ marginTop: '10px' }}>
        <div className="image-grid">
          <img src="https://atcinfocom.in/supportimg/avocent.png" className="img-polaroid" alt="avocent" />
        </div>
      </div>

      <hr />

      <div className="row" style={{ marginTop: '30px' }}>
        <div className="image-grid">
          <h1>Environmental Monitoring and Sensor Platforms</h1>
          <p>ATC NMS includes extensive support for environmental monitoring and sensor platforms covering diverse sensor types including air flow, voltage, temperature, and humidity.</p>
        </div>
      </div>

      <div className="row" style={{ marginTop: '10px' }}>
        {[
          'https://atcinfocom.in/supportimg/infratec.png', 'https://atcinfocom.in/supportimg/packetflux.png', 'https://atcinfocom.in/supportimg/sensatronics.png', 'https://atcinfocom.in/supportimg/wut.png'
        ].map((img, index) => (
          <div className="image-grid" key={index}>
            <img src={img} className="img-polaroid" alt={`img-${index}`} />
          </div>
        ))}
      </div>

      <hr />

      <div className="row" style={{ marginTop: '30px' }}>
        <div className="image-grid">
          <h1>Printers and Print Servers</h1>
          <p>ATC NMS supports the majority of major printer and print servers.</p>
        </div>
      </div>

    </div>
  );
};

export default NMS;
