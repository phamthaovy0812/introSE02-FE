import React from 'react';
import './fullpost.css'
import Header from "../header/header"
import Footer from "../footer/footer"
const Fullpost = () => {
    return (
        <section>
          <Header/>
          <div class='hdtext'>NEWFEED</div>
            <div class='fp'>
                <div class='flex'>               
                    <div>
                        <img src= {require("../../assets/avata.png") } class='pf_avata'></img>
                    </div>
                    <div class='pf_pd'>
                        <div class='pf_name'>Cây cam ngọt của tôi - José Mauro de Vasconcelos</div>
                        <div class='pf_info'>@congchuabongbong</div>
                    </div>
            </div>

            <div class='flex'>
            <div class='pf_info'> JOSÉ MAURO DE VASCONCELOS (1920-1984) là nhà văn người Brazil. Sinh ra trong một gia đình nghèo ở ngoại ô Rio de Janeiro, lớn lên ông phải làm đủ nghề để kiếm sống. Nhưng với tài kể chuyện thiên bẩm, trí nhớ phi thường, trí tưởng tượng tuyệt vời cùng vốn sống phong phú, José cảm thấy trong mình thôi thúc phải trở thành nhà văn nên đã bắt đầu sáng tác năm 22 tuổi. Tác phẩm nổi tiếng nhất của ông là tiểu thuyết mang màu sắc tự truyện Cây cam ngọt của tôi. Cuốn sách được đưa vào chương trình tiểu học của Brazil, được bán bản quyền cho hai mươi quốc gia và chuyển thể thành phim điện ảnh. Ngoài ra, José còn rất thành công trong vai trò diễn viên điện ảnh và biên kịch.

***
Chúng tôi đi xuống phố, tay trong tay, chẳng có gì phải vội. Totoca đang dạy tôi về cuộc sống. Và điều đó khiến tôi thực sự hạnh phúc, được anh trai nắm tay và dạy nhiều điều. Nhưng là dạy về những điều thuộc thế giới bên ngoài. Bởi vì ở nhà, tôi học hỏi bằng cách tự mày mò khám phá và tự làm, tôi mắc lỗi nhiều và vì mắc lỗi, tôi thường bị ăn đòn. Cho tới tận trước đây không lâu, tôi vẫn chưa bị ai đánh bao giờ. Nhưng rồi mọi người nghe được chuyện này, chuyện nọ và bắt đầu nói tôi là quỷ, là quái vật, là tiểu yêu tóc hung. Tôi không muốn biết về điều đó. Nếu không phải đang ở bên ngoài thì tôi đã bắt đầu hát. Hát thú vị lắm. Ngoài ca hát, Totoca còn biết làm điều khác nữa: anh có thể huýt sáo. Nhưng dù cố gắng đến mức nào tôi cũng chẳng thể bắt chước anh huýt sáo được, chẳng âm thanh nào bật ra cả. Để an ủi tôi, anh bảo chuyện đó cũng bình thường thôi, rằng tôi chưa có cái miệng của người huýt sáo. Nhưng vì không thể hát thành lời, tôi hát thầm ở trong lòng. Thoạt đầu điều đó thật kỳ cục, nhưng về sau tôi cảm thấy hát như thế thực sự thú vị. Và lúc này, tôi đang nhớ lại một bài hát mẹ thường hát khi tôi còn bé xíu. Mẹ đứng bên chậu giặt, mảnh khăn buộc quanh đầu để che nắng. Với chiếc tạp dề ôm quanh thắt lưng, mẹ đứng đó hết giờ này đến giờ khác, dầm tay trong nước, khiến xà phòng nổi cơ man nào là bọt. Sau đó mẹ vắt kiệt nước khỏi quần áo và đem ra dây, phơi lên, kẹp lại và kéo chiếc dây phơi lên cao. Mẹ làm thế với tất cả quần áo. Mẹ giặt thuê cho nhà bác sĩ Faulhaber để kiếm thêm chút ít giúp trang trải chi phí sinh hoạt. Mẹ cao, gầy, nhưng rất đẹp. Da mẹ rám nắng, tóc thẳng và đen. Khi mẹ không cột tóc lên, tóc mẹ xõa đến tận thắt lưng. Nhưng tuyệt nhất là khi mẹ hát, và tôi hay quanh quẩn bên mẹ học lỏm.
 </div>
            <img src= {require("../../assets/book.png") } class='fp_img'></img>
            </div>
            

          </div>
          <Footer/>

        </section>
        
    );
};

export default Fullpost;

